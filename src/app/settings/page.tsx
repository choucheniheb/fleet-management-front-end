
const Settings = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Profile Settings</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Name</label>
            <input type="text" defaultValue="John Doe" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email</label>
            <input type="email" defaultValue="john.doe@example.com" className="w-full p-2 border border-gray-300 rounded-lg" />
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

