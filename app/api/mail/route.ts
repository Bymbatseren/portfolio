import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req:Request){
    try{
    const {email,text,name} = await req.json()
    const transporter =nodemailer.createTransport({
        service:"Gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        }
    })
    const mailOptions ={
        from :email,
        to:process.env.EMAIL_USER,
        subject:name,
        text:text

    }
    await transporter.sendMail(mailOptions)
    return NextResponse.json({message:"амжилттай илгээлээ"})
    } catch(err){
        console.error("алдаа гарлаа:", err);
    }
}