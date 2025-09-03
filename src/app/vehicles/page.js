
import Link from 'next/link';

const vehicles = [
  { id: 1, name: 'Vehicle 1', driver: 'John Doe' },
  { id: 2, name: 'Vehicle 2', driver: 'Jane Smith' },
  { id: 3, name: 'Vehicle 3', driver: 'Peter Jones' },
];

const Vehicles = () => {
  return (
    <div>
      <h1>Vehicles</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            <Link href={`/vehicles/${vehicle.id}`}>
              {vehicle.name} - {vehicle.driver}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vehicles;

