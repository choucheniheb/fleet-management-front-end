
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
    <div>
      <h1>{vehicle.make} {vehicle.model}</h1>
      <p>Year: {vehicle.year}</p>
      <p>VIN: {vehicle.vin}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Speed</h2>
          <GaugeChart id="speed-gauge" nrOfLevels={20} percent={vehicleData.speed / 120} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>RPM</h2>
          <GaugeChart id="rpm-gauge" nrOfLevels={30} percent={vehicleData.rpm / 7000} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Fuel Level</h2>
          <GaugeChart id="fuel-gauge" nrOfLevels={10} percent={vehicleData.fuelLevel} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Engine Temperature</h2>
          <GaugeChart id="temp-gauge" nrOfLevels={15} percent={vehicleData.engineTemp / 120} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Battery Voltage</h2>
          <GaugeChart id="voltage-gauge" nrOfLevels={10} percent={(vehicleData.batteryVoltage - 10) / 4} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Oil Pressure</h2>
          <GaugeChart id="pressure-gauge" nrOfLevels={10} percent={vehicleData.oilPressure / 100} />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

