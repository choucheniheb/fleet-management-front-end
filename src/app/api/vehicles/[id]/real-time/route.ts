import { NextResponse } from 'next/server';
import realTime from '@/data/1/real-time.json';

export async function GET() {
  return NextResponse.json(realTime);
}
