"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TbPhotoSensor3 } from "react-icons/tb";

interface Certificate {
  id: number;
  image: string;
  title: string;
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isHovered, setIsHovered] = useState<number | false>(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ✅ Desktop шалгах (lg ≥ 1024px)
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const certificates: Certificate[] = [
    { id: 1, image: "/certificate.jpg", title: "Certificate 1" },
  ];

  // ✅ Download
  const handleDownload = async () => {
    if (!selectedCert) return;

    try {
      const res = await fetch(selectedCert.image);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${selectedCert.title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  // ✅ Print
  const handlePrint = () => {
    if (!selectedCert) return;

    const win = window.open("", "_blank");
    if (!win) return;

    win.document.write(`
      <html>
        <head>
          <title>Print Certificate</title>
          <style>
            body {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
            }
            img {
              max-width: 100%;
              height: auto;
            }
            @media print {
              body { margin: 0; }
              img { width: 100%; }
            }
          </style>
        </head>
        <body>
          <img src="${selectedCert.image}" onload="window.print(); window.close();" />
        </body>
      </html>
    `);

    win.document.close();
  };

  return (
    <>
      {/* ===== CERTIFICATE GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 p-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
            onMouseEnter={() => setIsHovered(cert.id)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              // ❌ Mobile → modal нээхгүй
              if (!isDesktop) {
                // 👉 Хэрвээ mobile дээр шинэ tab нээхийг хүсвэл:
                // window.open(cert.image, "_blank");
                return;
              }
              setSelectedCert(cert);
            }}
          >
            <div className="cursor-pointer border border-white/20 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:scale-[1.02] transition">
              <div className="p-4 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full rounded-lg"
                />

                {/* Hover overlay – desktop only */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered === cert.id && isDesktop ? 1 : 0 }}
                  className="hidden lg:flex absolute inset-0 bg-black/60 backdrop-blur-sm items-center justify-center rounded-lg pointer-events-none"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered === cert.id ? 1 : 0 }}
                  >
                    <TbPhotoSensor3 className="text-white text-6xl mb-2 mx-auto" />
                    <p className="text-white text-lg font-semibold">
                      View Certificate
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== MODAL (DESKTOP ONLY) ===== */}
      <AnimatePresence>
        {selectedCert && isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>

              {/* Image */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full"
                />
              </div>

              {/* Actions */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handleDownload}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Download
                </button>
                <button
                  onClick={handlePrint}
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                >
                  Print
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
