import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true }, // Only select ID for efficiency
    });

    return NextResponse.json({ exists: !!user });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
