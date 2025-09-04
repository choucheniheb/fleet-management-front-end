import { NextResponse } from 'next/server';
import totalDistance from '@/data/total-distance.json';

export async function GET() {
  return NextResponse.json(totalDistance);
}
