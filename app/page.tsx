// ========================================
// HOME PAGE (page.tsx) - ЭНИЙГ БҮТНЭЭР COPY ХИЙГЭЭРЭЙ
// ========================================
"use client"
import { useRef } from "react";
import ParticleBackground from "./_components/background";
import Header from "./_components/header";
import Section1 from "./_components/section1";
import Section2 from "./_components/section2";
import Section3 from "./_components/section3";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    section1Ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleAboutClick = () => {
    section2Ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleProjectsClick = () => {
    section2Ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleContactClick = () => {
    section3Ref.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      <ParticleBackground/>
      <Header 
        onHomeClick={handleHomeClick}
  
        onProjectsClick={handleProjectsClick}
        onContactClick={handleContactClick}
      />
      
      <div ref={section1Ref}>
        <Section1/>
      </div>
      
      <ParticleBackground/>
      
      <div ref={section2Ref}>
        <Section2/>
      </div>

      <div ref={section3Ref}>
        <Section3/>
      </div>
    </>
  );
}