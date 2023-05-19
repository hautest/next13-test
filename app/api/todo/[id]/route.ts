import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  const params = req.url.match(/\d+$/);
  if (params === null) return NextResponse.error();

  const res = await prisma.todo.delete({
    where: {
      id: Number(params[0]),
    },
  });

  return NextResponse.json(res);
}

export async function PATCH(req: Request) {
  const params = req.url.match(/\d+$/);
  if (params === null) return NextResponse.error();

  const body = await req.json();

  const res = await prisma.todo.update({
    where: {
      id: Number(params[0]),
    },
    data: {
      ...body,
    },
  });

  return NextResponse.json(res);
}
