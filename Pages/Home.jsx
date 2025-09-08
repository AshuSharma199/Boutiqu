function Home() {
  return (
    <div className="p-10 text-center">
      {/* Boutique Name */}
      <h1 className="text-5xl font-extrabold text-[#d96d67] tracking-wide">
        Vastram Boutique
      </h1>

      {/* Tagline */}
      <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
        Discover the perfect blend of <span className="font-semibold">ethnic tradition</span> 
        and <span className="font-semibold">modern fashion</span>.  
        Handcrafted with love, designed for elegance.
      </p>

      {/* Call to Actions */}
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/clothing"
          className="bg-[#d96d67] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#c85d58] transition"
        >
          Shop Now
        </a>
        <a
          href="/about"
          className="bg-white border border-[#d96d67] text-[#d96d67] px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#fff0f0] transition"
        >
          Learn More
        </a>
      </div>

      {/* Highlights */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold text-[#d96d67]">✨ Exclusive Designs</h3>
          <p className="mt-2">Unique collections crafted with Indian artistry.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#d96d67]">🧵 Premium Fabrics</h3>
          <p className="mt-2">Only the finest quality materials for ultimate comfort.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#d96d67]">🚚 Fast Delivery</h3>
          <p className="mt-2">Quick and reliable shipping to your doorstep.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
