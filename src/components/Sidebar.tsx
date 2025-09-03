
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#fff', padding: '20px', borderRight: '1px solid #e0e0e0', height: '100vh' }}>
      <h2 style={{ marginBottom: '30px', color: '#333' }}>Fleet Management</h2>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/overview" style={{ color: '#555', fontSize: '16px', fontWeight: '500' }}>Overview</Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/vehicles" style={{ color: '#555', fontSize: '16px', fontWeight: '500' }}>Vehicles</Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link href="/settings" style={{ color: '#555', fontSize: '16px', fontWeight: '500' }}>Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

