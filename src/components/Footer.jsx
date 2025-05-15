import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white">TokoBunga</h3>
          <p className="mt-2 text-white">
            Bunga segar dan indah untuk setiap momen spesial Anda.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-white">
            <li>
              <a href="#" className="hover:text-white">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Kontak Kami</h4>
          <ul className="space-y-2 text-white text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Jakarta, Indonesia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> cs@tokobunga.id
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-white mt-8 text-sm">
        &copy; {new Date().getFullYear()} Find Your Angel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
