export default function HeroSection() {
  return (
    <section className="text-center bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/736x/b2/09/dc/b209dce21b92e97bdb284415079ec592.jpg')" }}>
        <div className="bg-black bg-opacity-50 w-full py-72">
          <h2 className="text-4xl md:text-6xl font-bold">Make Your Ideas Come True</h2>
          <p className="text-gray-400 mt-4">We create digital experiences that drive success.</p>
          <button className="mt-6 bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700">Get Started</button>
        </div>
      </section>
  );
}