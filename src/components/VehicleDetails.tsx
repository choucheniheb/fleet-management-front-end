'use client';

import GaugeChart from 'react-gauge-chart';

const VehicleDetails = ({ info, realTime }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{info.name}</h1>
          <p className="text-gray-600">Model: {info.model}</p>
          <p className="text-gray-600">Year: {info.year}</p>
          <p className="text-gray-600">License Plate: {info.license_plate}</p>
          <p className="text-gray-600">VIN: {info.vin}</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Edit Vehicle</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Delete Vehicle</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Speed</h2>
          <GaugeChart id="speed-gauge" nrOfLevels={20} percent={realTime.speed / 120} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">RPM</h2>
          <GaugeChart id="rpm-gauge" nrOfLevels={30} percent={realTime.rpm / 7000} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Fuel Level</h2>
          <GaugeChart id="fuel-gauge" nrOfLevels={10} percent={realTime.fuel_level / 100} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Engine Temperature</h2>
          <GaugeChart id="temp-gauge" nrOfLevels={15} percent={realTime.engine_temp / 120} textColor="#333" colors={['#5BE12C', '#F5CD19', '#EA4228']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Battery Voltage</h2>
          <GaugeChart id="voltage-gauge" nrOfLevels={10} percent={(realTime.battery_voltage - 10) / 4} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oil Pressure</h2>
          <GaugeChart id="pressure-gauge" nrOfLevels={10} percent={realTime.oil_pressure / 100} textColor="#333" colors={['#EA4228', '#F5CD19', '#5BE12C']} />
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;