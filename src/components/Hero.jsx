const Hero = () => {
  return (
    <section className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Bunga Cantik untuk Momen Spesial
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Toko Bunga terpercaya dengan koleksi terlengkap dan pengiriman cepat
            ke seluruh Indonesia.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-500 transition"
            >
              Lihat Koleksi
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80"
            alt="Bouquet"
            className="rounded-2xl shadow-lg w-80 md:w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
