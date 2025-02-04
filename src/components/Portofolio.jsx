export default function Portfolio() {
  const images = [
    "https://i.pinimg.com/736x/d0/0d/7e/d00d7e5283fe55c03ab1b3f7da4dfd6e.jpg",
    "https://i.pinimg.com/736x/d7/41/33/d74133d4e00a84694707e067add43450.jpg",
    "https://i.pinimg.com/736x/6a/ec/54/6aec54dcb14c166c4c9ade98f158c52a.jpg",
    "https://i.pinimg.com/736x/78/08/4c/78084cbc246fba79b7baa7d0b2f1c42c.jpg",
  ];

  return (
    <section id="portfolio" className="py-20 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Portfolio ${index + 1}`} 
            className="rounded-lg shadow-lg hover:opacity-80 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}