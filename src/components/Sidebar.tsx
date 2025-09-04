
import Link from 'next/link';
import { LayoutDashboard, Car, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-5 border-r border-gray-200 h-screen">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">Fleet Management</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/overview" className="flex items-center text-gray-600 hover:text-blue-500 text-lg font-medium">
              <LayoutDashboard className="mr-3" />
              Overview
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/vehicles" className="flex items-center text-gray-600 hover:text-blue-500 text-lg font-medium">
              <Car className="mr-3" />
              Vehicles
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/settings" className="flex items-center text-gray-600 hover:text-blue-500 text-lg font-medium">
              <Settings className="mr-3" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

