
import Link from 'next/link';
import { Vehicle } from '../types';

const vehicles: Vehicle[] = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2021, vin: '1234567890' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2022, vin: '0987654321' },
  { id: 3, make: 'Ford', model: 'F-150', year: 2020, vin: '1122334455' },
];

const Vehicles = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Vehicles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{vehicle.make} {vehicle.model}</h2>
              <p className="text-gray-600">Year: {vehicle.year}</p>
              <p className="text-gray-600">VIN: {vehicle.vin}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;

