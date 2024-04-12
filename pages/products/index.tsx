import { useState } from "react";
import { Cart, Product } from "../../types";
import ProductCard from "../../components/ProductCard";
import CartDrawer from "../../components/CartDrawer";
import { FaShoppingCart } from "react-icons/fa";
import { productsMock } from "../api/product";
import SidebarMenu from "../../components/SidebarMenu";

const Products = () => {
  const [cartProducts, setCartProducts] = useState<Cart>({
    products: [],
    total: 0,
  });

  const [products, setProducts] = useState(productsMock);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClose = () => {
    setIsCartOpen(false);
  };

  const onMenuClose = () => {
    setMenuIsOpen(false);
  };

  const handleOpenCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (product: Product) => {
    const isTheSameProduct = cartProducts.products.find(
      (cartProduct) => cartProduct.id === product.id
    );
    product.amount += 1;

    if (isTheSameProduct) {
      setCartProducts({
        ...cartProducts,
        products: cartProducts.products.map((cartProduct) =>
          cartProduct.id === product.id ? product : cartProduct
        ),
        total: parseFloat((cartProducts.total + product.price).toFixed(2)),
      });

      return;
    }

    setCartProducts({
      ...cartProducts,
      products: [...cartProducts.products, product],
      total: parseFloat((cartProducts.total + product.price).toFixed(2)),
    });
  };

  const handleRemoveFromCart = (product: Product) => {
    const newProducts = cartProducts.products.filter(
      (cartProduct) => cartProduct.id !== product.id
    );

    const hasRepeatedProducts = cartProducts.products.find(
      (cartProduct) => cartProduct.id === product.id
    );

    if (hasRepeatedProducts && hasRepeatedProducts.amount > 1) {
      product.amount -= 1;
      setCartProducts({
        products: cartProducts.products.map((cartProduct) =>
          cartProduct.id === product.id ? product : cartProduct
        ),
        total: parseFloat((cartProducts.total - product.price).toFixed(2)),
      });

      return;
    }
    setCartProducts({
      products: newProducts,
      total: parseFloat((cartProducts.total - product.price).toFixed(2)),
    });
  };

  const handleRemoveAllFromCart = () => {
    setCartProducts({
      products: [],
      total: 0,
    });

    products.forEach((product) => (product.amount = 0));
  };

  const numberOfProducts = cartProducts.products.reduce(
    (total, product) => total + product.amount,
    0
  );

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
      <CartDrawer
        isOpen={isCartOpen}
        onClose={onClose}
        cartProducts={cartProducts}
        handleRemoveFromCart={handleRemoveFromCart}
        handleAddToCart={handleAddToCart}
        handleRemoveAllFromCart={handleRemoveAllFromCart}
      />
      <div className="flex w-full">
        <SidebarMenu
          products={products}
          setProducts={setProducts}
          isOpen={menuIsOpen}
          onClose={onMenuClose}
        />

        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setMenuIsOpen(!menuIsOpen)}
              className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded"
            >
              Filters
            </button>
            <h1 className="text-2xl font-bold text-white">Products</h1>
            <button
              onClick={handleOpenCartOpen}
              className="bg-white text-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded flex items-center"
            >
              <FaShoppingCart className="mr-2" />
              {numberOfProducts} Items
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-6">
            {currentItems.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <ul className="flex">
              <li>
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="py-2 px-4 mr-2 bg-gray-200 text-gray-700 rounded-l"
                >
                  Prev
                </button>
              </li>
              {pages.map((page) => (
                <li key={page}>
                  <button
                    onClick={handleClick}
                    id={page.toString()}
                    className={`py-2 px-4 mx-1 bg-gray-200 text-gray-700 rounded ${
                      currentPage === page && "bg-blue-500 text-white"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={handleNext}
                  disabled={currentPage === pages.length}
                  className="py-2 px-4 ml-2 bg-gray-200 text-gray-700 rounded-r"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
