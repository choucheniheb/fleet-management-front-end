
import Settings from '@/components/Settings';

const SettingsPage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown USA',
  };

  return (
    <div>
      <Settings user={user} />
    </div>
  );
};

export default SettingsPage;

