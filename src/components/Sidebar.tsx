
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-5 border-r border-gray-200 h-screen">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">Fleet Management</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/overview" className="text-gray-600 hover:text-blue-500 text-lg font-medium">Overview</Link>
          </li>
          <li className="mb-4">
            <Link href="/vehicles" className="text-gray-600 hover:text-blue-500 text-lg font-medium">Vehicles</Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="text-gray-600 hover:text-blue-500 text-lg font-medium">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

