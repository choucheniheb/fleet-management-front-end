'use client';

import Link from 'next/link';

const VehicleList = ({ vehicles }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Vehicles</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Vehicle</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Link key={vehicle.id} href={`/dashboard/vehicles/${vehicle.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{vehicle.name}</h2>
              <p className="text-gray-600">Model: {vehicle.model}</p>
              <p className="text-gray-600">Year: {vehicle.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;