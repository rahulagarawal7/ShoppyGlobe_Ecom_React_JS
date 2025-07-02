const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">About ShoppyGlobe</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Your global destination for effortless online shopping – anytime,
          anywhere.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        {/* Who we are */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            ShoppyGlobe is a modern eCommerce platform built to make online
            shopping simple, fast, and enjoyable. Whether you're looking for
            electronics, fashion, home goods, or daily essentials — we connect
            customers with quality products and trusted sellers around the
            globe.
          </p>
        </section>

        {/* Our Vision */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            fermentum lectus vitae lorem malesuada, nec vestibulum ex rhoncus.
            Praesent nec viverra elit, vel ultrices lacus. Proin fermentum felis
            sed justo volutpat, at mattis velit congue.
          </p>
        </section>

        {/* What Makes Us Different */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            What Makes Us Different
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Wide selection of products across all categories</li>
            <li>Seamless and secure checkout experience</li>
            <li>Global delivery and real-time tracking</li>
            <li>Customer-first support and easy returns</li>
            <li>Trusted vendors and verified quality</li>
          </ul>
        </section>

        {/* Our Promise */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Our Promise</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium magna et malesuada fermentum. At ShoppyGlobe, we promise to
            bring you convenience, quality, and peace of mind with every click.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
