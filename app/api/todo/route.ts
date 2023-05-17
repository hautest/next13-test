import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await prisma.todo.findMany();

  return NextResponse.json(res);
}

export async function POST(req: Request) {
  const { content } = await req.json();
  const res = await prisma.todo.create({
    data: {
      content,
    },
  });

  return NextResponse.json(res);
}
