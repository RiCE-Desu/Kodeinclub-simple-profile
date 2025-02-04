export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">KodeinClub</h1>
      <ul className="flex space-x-6">
        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}