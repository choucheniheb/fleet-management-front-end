
import VehicleList from '@/components/VehicleList';

const fetchVehicles = async () => {
  const res = await fetch('http://localhost:3000/api/vehicles');
  const data = await res.json();
  return data;
};

const VehiclesPage = async () => {
  const vehicles = await fetchVehicles();

  return (
    <div>
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default VehiclesPage;

