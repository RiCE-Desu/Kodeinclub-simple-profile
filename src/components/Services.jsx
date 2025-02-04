export default function Services() {
    return (
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {["Development", "UI/UX Design", "Branding", "SEO Optimization", "Consulting", "Marketing"].map((service, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg text-center">
              <h3 className="text-xl font-semibold">{service}</h3>
              <p className="text-gray-400 mt-2">High-quality {service} services for your business.</p>
            </div>
          ))}
        </div>
      </section>
    );
  }