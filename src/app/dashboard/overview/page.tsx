
import Overview from '@/components/Overview';

const fetchTotalDistance = async () => {
  const res = await fetch('http://localhost:3000/api/total-distance');
  const data = await res.json();
  return data;
};

const fetchFuelConsumption = async () => {
  const res = await fetch('http://localhost:3000/api/fuel-consumption');
  const data = await res.json();
  return data;
};

const OverviewPage = async () => {
  const totalDistance = await fetchTotalDistance();
  const fuelConsumption = await fetchFuelConsumption();

  return (
    <div>
      <Overview totalDistance={totalDistance} fuelConsumption={fuelConsumption} />
    </div>
  );
};

export default OverviewPage;

