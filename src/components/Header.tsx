
import { Bell, UserCircle, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white border-b border-gray-200">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-96" />
      </div>
      <div className="flex items-center">
        <Bell className="mr-5 cursor-pointer text-gray-600" />
        <UserCircle className="cursor-pointer text-gray-600" />
      </div>
    </div>
  );
};

export default Header;

