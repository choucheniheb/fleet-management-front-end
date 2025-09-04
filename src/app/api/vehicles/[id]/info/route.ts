import { NextResponse } from 'next/server';
import info from '@/data/1/info.json';

export async function GET() {
  return NextResponse.json(info);
}
