
import VehicleDetails from '@/components/VehicleDetails';
import { useRouter } from 'next/router';

const VehiclePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const vehicleInfo = {
    id: Number(id),
    name: `Vehicle ${id}`,
    driver: `Driver ${id}`,
    status: 'Running',
  };

  const vehicleRealTime = {
    speed: Math.floor(Math.random() * 100),
    rpm: Math.floor(Math.random() * 5000),
    fuel: Math.floor(Math.random() * 100),
    engineTemp: Math.floor(Math.random() * 120),
    battery: Math.floor(Math.random() * 14),
    oilPressure: Math.floor(Math.random() * 100),
  };

  return (
    <div>
      <VehicleDetails info={vehicleInfo} realTime={vehicleRealTime} />
    </div>
  );
};

export default VehiclePage;

