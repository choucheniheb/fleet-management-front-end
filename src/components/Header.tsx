
'use client';

import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const notifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
  ];

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <Search className="w-6 h-6 text-gray-500" />
        <input type="text" placeholder="Search..." className="ml-2 p-2 border border-gray-300 rounded-lg" />
      </div>
      <div className="flex items-center">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-500" />
          {notifications.length > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </div>
        <div className="ml-4 flex items-center">
          <User className="w-8 h-8 rounded-full" />
          <div className="ml-2">
            <p className="font-semibold">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

