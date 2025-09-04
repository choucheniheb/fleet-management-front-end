import { NextResponse } from 'next/server';
import search from '@/data/search.json';

export async function GET() {
  return NextResponse.json(search);
}
