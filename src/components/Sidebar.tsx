
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Car, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard/overview', label: 'Overview', icon: Home },
    { href: '/dashboard/vehicles', label: 'Vehicles', icon: Car },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Fleet Management</h1>
      </div>
      <nav className="flex-1 p-5">
        <ul>
          {links.map(link => (
            <li key={link.href} className="mb-3">
              <Link href={link.href}>
                <a className={`flex items-center p-3 rounded-lg ${pathname === link.href ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>
                  <link.icon className="w-5 h-5 mr-3" />
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5 border-t border-gray-700">
        <Link href="/">
          <a className="flex items-center p-3 rounded-lg hover:bg-gray-700">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

