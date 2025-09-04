
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="text-center p-5 bg-white border-t border-gray-200">
      <p className="text-gray-500 mb-4">© 2025 Fleet Management</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-blue-500"><Github /></a>
        <a href="#" className="text-gray-500 hover:text-blue-500"><Twitter /></a>
        <a href="#" className="text-gray-500 hover:text-blue-500"><Linkedin /></a>
      </div>
    </div>
  );
};

export default Footer;

