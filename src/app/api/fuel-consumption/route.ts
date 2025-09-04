import { NextResponse } from 'next/server';
import fuelConsumption from '@/data/fuel-consumption.json';

export async function GET() {
  return NextResponse.json(fuelConsumption);
}
