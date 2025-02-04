import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 bg-gray-800 text-gray-400 text-center">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-4 mb-4">
          <FaFacebook className="text-xl hover:text-white" />
          <FaTwitter className="text-xl hover:text-white" />
          <FaInstagram className="text-xl hover:text-white" />
        </div>
        <p>&copy; 2025 Enver. All rights reserved.</p>
      </div>
    </footer>
  );
}