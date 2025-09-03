
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2>Fleet Management</h2>
      <nav>
        <ul>
          <li>
            <Link href="/overview">Overview</Link>
          </li>
          <li>
            <Link href="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

