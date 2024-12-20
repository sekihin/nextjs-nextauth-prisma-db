import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}
