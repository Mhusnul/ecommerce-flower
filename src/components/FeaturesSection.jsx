import { Truck, ShieldCheck, Headset } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <Truck className="w-8 h-8 text-pink-600" />,
    title: "Pengiriman Cepat",
    description: "Pesanan Anda akan tiba dalam waktu 1-2 hari kerja.",
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-8 h-8 text-pink-600" />,
    title: "Garansi Uang Kembali",
    description: "Kami menjamin kualitas bunga yang Anda terima.",
  },
  {
    id: 3,
    icon: <Headset className="w-8 h-8 text-pink-600" />,
    title: "Layanan Pelanggan 24/7",
    description: "Tim kami siap membantu kapan saja Anda butuh.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Kenapa Pilih Kami?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
