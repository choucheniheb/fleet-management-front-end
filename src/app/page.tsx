import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Fleet Management</h1>
        <p className="text-lg text-gray-600 mb-8">Your one-stop solution for managing your vehicle fleet efficiently.</p>
        <Link href="/overview" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">Go to Dashboard</Link>
      </div>
    </div>
  );
}
