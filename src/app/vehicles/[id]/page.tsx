
'use client';

import { useParams } from 'next/navigation';
import GaugeChart from 'react-gauge-chart';
import { Vehicle, VehicleData } from '../../types';

const VehicleDetails = () => {
  const { id } = useParams();

  // Dummy data for a specific vehicle
  const vehicle: Vehicle = {
    id: Number(id),
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    vin: '1234567890',
  };

  const vehicleData: VehicleData = {
    speed: 60,
    rpm: 3000,
    fuelLevel: 0.7,
    engineTemp: 90,
    batteryVoltage: 12.5,
    oilPressure: 50,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{vehicle.make} {vehicle.model}</h1>
        <p className="text-gray-600">Year: {vehicle.year}</p>
        <p className="text-gray-600">VIN: {vehicle.vin}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Speed</h2>
          <GaugeChart id="speed-gauge" nrOfLevels={20} percent={vehicleData.speed / 120} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">RPM</h2>
          <GaugeChart id="rpm-gauge" nrOfLevels={30} percent={vehicleData.rpm / 7000} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fuel Level</h2>
          <GaugeChart id="fuel-gauge" nrOfLevels={10} percent={vehicleData.fuelLevel} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Engine Temperature</h2>
          <GaugeChart id="temp-gauge" nrOfLevels={15} percent={vehicleData.engineTemp / 120} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Battery Voltage</h2>
          <GaugeChart id="voltage-gauge" nrOfLevels={10} percent={(vehicleData.batteryVoltage - 10) / 4} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oil Pressure</h2>
          <GaugeChart id="pressure-gauge" nrOfLevels={10} percent={vehicleData.oilPressure / 100} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

