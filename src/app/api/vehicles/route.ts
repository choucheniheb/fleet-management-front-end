import { NextResponse } from 'next/server';
import vehicles from '@/data/vehicles.json';

export async function GET() {
  return NextResponse.json(vehicles);
}
