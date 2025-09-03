
import Link from 'next/link';
import { Vehicle } from '../types';

const vehicles: Vehicle[] = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2021, vin: '1234567890' },
  { id: 2, make: 'Honda', model: 'Civic', year: 2022, vin: '0987654321' },
  { id: 3, make: 'Ford', model: 'F-150', year: 2020, vin: '1122334455' },
];

const Vehicles = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '30px', color: '#333' }}>Vehicles</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {vehicles.map((vehicle) => (
          <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
              <h2 style={{ marginBottom: '10px', color: '#555' }}>{vehicle.make} {vehicle.model}</h2>
              <p style={{ color: '#777' }}>Year: {vehicle.year}</p>
              <p style={{ color: '#777' }}>VIN: {vehicle.vin}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Vehicles;

