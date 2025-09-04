
import Settings from '@/components/Settings';

const fetchUser = async () => {
  const res = await fetch('http://localhost:3000/api/user');
  const data = await res.json();
  return data;
};

const SettingsPage = async () => {
  const user = await fetchUser();

  return (
    <div>
      <Settings user={user} />
    </div>
  );
};

export default SettingsPage;

