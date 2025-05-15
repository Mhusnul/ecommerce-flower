import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-black">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Temukan Bunga Terindah untuk Momen Spesialmu
        </motion.h2>
        <motion.p
          className="mt-4 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Pesan sekarang dan dapatkan penawaran terbaik dari kami!
        </motion.p>
        <motion.a
          href="#"
          className="inline-block mt-8 bg-pink-600 text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-pink-500 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Belanja Sekarang
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;
