import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Bouquet Mawar Merah",
    price: "Rp150.000",
    image:
      "https://images.unsplash.com/photo-1608571423909-0c45ba67f582?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Buket Campuran Elegan",
    price: "Rp200.000",
    image:
      "https://images.unsplash.com/photo-1596464716121-b411b9c3e2b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Lili Putih Fresh",
    price: "Rp180.000",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Tulip Kuning Ceria",
    price: "Rp170.000",
    image:
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Koleksi Bunga Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-pink-600 font-bold">{product.price}</p>
                <button className="mt-3 w-full bg-pink-600 text-white py-2 rounded-full hover:bg-pink-500 transition">
                  Beli Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
