import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sari Wulandari",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Pelayanan cepat dan bunga yang sangat segar! Saya sangat puas dengan TokoBunga.",
  },
  {
    id: 2,
    name: "Budi Santoso",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "Koleksi bunganya lengkap dan desainnya cantik. Recomended banget!",
  },
  {
    id: 3,
    name: "Fitri Handayani",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Pengiriman tepat waktu dan kemasan rapi, membuat hadiah saya semakin spesial.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Apa Kata Pelanggan Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map(({ id, name, avatar, quote }) => (
            <motion.div
              key={id}
              className="bg-pink-50 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{quote}"</p>
              <h4 className="font-semibold text-pink-600">{name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
