import dbConnect from "@/lib/mongodb";
import Project from "@/model/Project";
import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function GET() {
  try {
    await dbConnect();

    const projects = await Project.find().sort({ _id: -1 });

    return NextResponse.json(
      { success: true, data: projects },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Project авахад алдаа гарлаа" },
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const {
      title,
      description,
      imageUrl,
      projectUrl,
      techStack,
      githuburl,
      isTeam,
    } = body;
    if (
      !title ||
      !description ||
      !imageUrl ||
      !projectUrl ||
      !techStack ||
      !githuburl ||
      isTeam === undefined
    ) {
      return NextResponse.json(
        { success: false, message: "Бүх талбарыг бөглөнө үү" },
        { status: 400 }
      );
    }

    const newProject = await Project.create({
      title,
      description,
      imageUrl,
      projectUrl,
      techStack,
      githuburl,
      isTeam,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project амжилттай нэмэгдлээ",
        data: newProject,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Project нэмэхэд алдаа гарлаа" },
      { status: 500 }
    );
  }
}

