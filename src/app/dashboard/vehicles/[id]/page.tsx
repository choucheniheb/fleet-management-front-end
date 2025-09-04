
import VehicleDetails from '@/components/VehicleDetails';

const fetchVehicleInfo = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}/info`);
  const data = await res.json();
  return data;
};

const fetchVehicleRealTime = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}/real-time`);
  const data = await res.json();
  return data;
};

const VehiclePage = async ({ params }: { params: { id: string } }) => {
  const vehicleInfo = await fetchVehicleInfo(params.id);
  const vehicleRealTime = await fetchVehicleRealTime(params.id);

  return (
    <div>
      <VehicleDetails info={vehicleInfo} realTime={vehicleRealTime} />
    </div>
  );
};

export default VehiclePage;

