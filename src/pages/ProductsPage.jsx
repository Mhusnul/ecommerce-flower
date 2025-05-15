import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Buket Mawar Merah",
    price: 150000,
    image:
      "https://images.unsplash.com/photo-1607082349566-187342b7e3d4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Buket Bunga Campur",
    price: 200000,
    image:
      "https://images.unsplash.com/photo-1592910742193-d7f8c942f6a7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Buket Lily Putih",
    price: 175000,
    image:
      "https://images.unsplash.com/photo-1605664041336-d7484e7d55e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Buket Matahari Ceria",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1617196036170-f8b01fa2ecb1?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductsPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Koleksi Bunga Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
