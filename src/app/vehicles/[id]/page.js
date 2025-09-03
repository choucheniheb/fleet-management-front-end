
'use client';

import { useParams } from 'next/navigation';
import GaugeChart from 'react-gauge-chart';

const VehicleDetails = () => {
  const { id } = useParams();

  // Dummy data for a specific vehicle
  const vehicle = {
    id: id,
    name: `Vehicle ${id}`,
    driver: 'John Doe',
    speed: 60,
    rpm: 3000,
    fuelLevel: 0.7,
    engineTemp: 90,
    batteryVoltage: 12.5,
    oilPressure: 50,
  };

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Driver: {vehicle.driver}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Speed</h2>
          <GaugeChart id="speed-gauge" nrOfLevels={20} percent={vehicle.speed / 120} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>RPM</h2>
          <GaugeChart id="rpm-gauge" nrOfLevels={30} percent={vehicle.rpm / 7000} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Fuel Level</h2>
          <GaugeChart id="fuel-gauge" nrOfLevels={10} percent={vehicle.fuelLevel} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Engine Temperature</h2>
          <GaugeChart id="temp-gauge" nrOfLevels={15} percent={vehicle.engineTemp / 120} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Battery Voltage</h2>
          <GaugeChart id="voltage-gauge" nrOfLevels={10} percent={(vehicle.batteryVoltage - 10) / 4} />
        </div>
        <div style={{ width: '300px', margin: '20px' }}>
          <h2>Oil Pressure</h2>
          <GaugeChart id="pressure-gauge" nrOfLevels={10} percent={vehicle.oilPressure / 100} />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

