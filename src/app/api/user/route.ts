import { NextResponse } from 'next/server';
import user from '@/data/user.json';

export async function GET() {
  return NextResponse.json(user);
}
