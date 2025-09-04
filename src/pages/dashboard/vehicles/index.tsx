
import VehicleList from '@/components/VehicleList';

const VehiclesPage = () => {
  const vehicles = [
    { id: 1, name: 'Vehicle 1', driver: 'Driver 1', status: 'Running' },
    { id: 2, name: 'Vehicle 2', driver: 'Driver 2', status: 'Stopped' },
    { id: 3, name: 'Vehicle 3', driver: 'Driver 3', status: 'Idle' },
  ];

  return (
    <div>
      <VehicleList vehicles={vehicles} />
    </div>
  );
};

export default VehiclesPage;

