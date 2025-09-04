import { NextResponse } from 'next/server';
import vehicles from '@/data/vehicles.json';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const vehicle = vehicles.find((v) => v.id === parseInt(params.id));
  return NextResponse.json(vehicle);
}
