import { Mail, Phone, MapPin, Globe, Share2, Heart } from "lucide-react";

function Footer() {
  return (
    <footer
      data-aos="fade-up"
      className="bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">XAMY</h2>
            <p className="text-xs tracking-widest text-blue-200 uppercase">
              International School
            </p>
            <p className="text-sm text-blue-100">
              Nurturing excellence, character, and lifelong learning in a supportive environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#academics" className="hover:text-white transition">Academics</a></li>
              <li><a href="#admissions" className="hover:text-white transition">Admissions</a></li>
              <li><a href="#school-life" className="hover:text-white transition">School Life</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-yellow-400 flex-shrink-0" />
                <span>School Address Line, City, Country</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                <span>info@xamyschool.com</span>
              </li>
            </ul>
          </div>

          {/* Connect / Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <p className="text-sm text-blue-100 mb-4">
              Stay connected through our official channels.
            </p>
            <div className="flex gap-3">
              <a
                href="#website"
                aria-label="Website"
                className="p-2 rounded-full bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 transition"
              >
                <Globe size={20} />
              </a>
              <a
                href="#share"
                aria-label="Social Share"
                className="p-2 rounded-full bg-blue-800 hover:bg-yellow-500 hover:text-blue-900 transition"
              >
                <Share2 size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} XAMY International School. All rights reserved.</p>
          <p className="flex items-center gap-1">
            POWERED BY XAMY WEB
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;