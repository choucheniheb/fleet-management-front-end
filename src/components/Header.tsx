
const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-white border-b border-gray-200">
      <input type="text" placeholder="Search..." className="px-4 py-2 border border-gray-300 rounded-lg w-96" />
      <div className="flex items-center">
        <span className="mr-5 cursor-pointer text-gray-600">Notifications</span>
        <span className="cursor-pointer text-gray-600">Profile</span>
      </div>
    </div>
  );
};

export default Header;

