const Menu = () => {
  return (
    <header className="flex flex-row w-full bg-blue-900 items-center justify-center h-fit">
      <a
        href="home"
        className="px-4 py-3 text-white font-sans hover:text-blue-300 transition-colors duration-200"
      >
        Home
      </a>
      <a
        href="products"
        className="px-4 py-3 text-white font-sans hover:text-blue-300 transition-colors duration-200"
      >
        Products
      </a>
      <a
        href="about"
        className="px-4 py-3 text-white font-sans hover:text-blue-300 transition-colors duration-200"
      >
        About
      </a>
      <a
        href="contact"
        className="px-4 py-3 text-white font-sans hover:text-blue-300 transition-colors duration-200"
      >
        Contact
      </a>
      <a
        href="leafletChat"
        className="px-4 py-3 text-white font-sans hover:text-blue-300 transition-colors duration-200"
      >
        leafletChat
      </a>
    </header>
  );
};

export default Menu;
