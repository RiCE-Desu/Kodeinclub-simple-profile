export default function WhyChooseUs() {
  return (
    <section className="text-center py-16 px-6">
      <h2 className="text-3xl font-bold">Why Enver Is The Best Choice?</h2>
      <div className="flex justify-center mt-6">
      <iframe 
          className="w-3/4 h-64 md:h-96 rounded-2xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Why Choose Us Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </section>
  );
}