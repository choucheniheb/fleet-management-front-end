export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  vin: string;
}

export interface VehicleData {
  speed: number;
  rpm: number;
  fuelLevel: number;
  engineTemp: number;
  batteryVoltage: number;
  oilPressure: number;
}
