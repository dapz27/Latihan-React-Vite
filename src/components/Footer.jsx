const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Tentang */}
          <div>
            <h2 className="text-2xl font-bold text-red-500">Gymnos</h2>
            <p className="text-gray-400 mt-2">
              Platform terbaik untuk kebugaranmu. Kami menyediakan berbagai aplikasi olahraga untuk kesehatan tubuh.
            </p>
          </div>
  
          {/* Navigasi */}
          <div>
            <h3 className="text-xl font-semibold text-white">Navigasi</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Project</a></li>
            </ul>
          </div>
  
          {/* Kontak & Sosial Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Hubungi Kami</h3>
            <p className="text-gray-400 mt-2">Email: support@gymnos.com</p>
            <p className="text-gray-400">Telepon: +62 123 456 789</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
  
        </div>
  
        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Gymnos. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;