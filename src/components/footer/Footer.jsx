const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">ShoppyGlobe</h2>
          <p className="text-sm">
            Your trusted global eCommerce platform. Discover, shop, and enjoy —
            wherever you are.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12M13 12H15V17H13V12M14 10.5C14.83 10.5 15.5 9.83 15.5 9C15.5 8.17 14.83 7.5 14 7.5C13.17 7.5 12.5 8.17 12.5 9C12.5 9.83 13.17 10.5 14 10.5Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7.75 2C5.68 2 4 3.68 4 5.75V18.25C4 20.32 5.68 22 7.75 22H16.25C18.32 22 20 20.32 20 18.25V5.75C20 3.68 18.32 2 16.25 2H7.75M12 8A4 4 0 1 1 8 12A4 4 0 0 1 12 8M17.25 6.75A1.25 1.25 0 1 1 16 8A1.25 1.25 0 0 1 17.25 6.75M12 10A2 2 0 1 0 14 12A2 2 0 0 0 12 10Z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.46.7A4.27 4.27 0 0 0 21.86 4c-.83.49-1.76.83-2.75 1.01A4.25 4.25 0 0 0 11 9.75c0 .34.04.66.1.97C7.69 10.5 4.8 8.88 2.9 6.45a4.27 4.27 0 0 0-.58 2.14c0 1.48.75 2.79 1.9 3.55A4.25 4.25 0 0 1 2 11.7v.05a4.25 4.25 0 0 0 3.41 4.17c-.38.1-.78.15-1.19.15-.29 0-.57-.03-.84-.08a4.25 4.25 0 0 0 3.97 2.95A8.53 8.53 0 0 1 2 19.54a11.94 11.94 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.53A8.36 8.36 0 0 0 22.46 6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-sm text-center py-4">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
