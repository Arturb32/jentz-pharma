import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Cart, Product } from "../types";
import { FaTimes } from "react-icons/fa";

type CardDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  cartProducts: Cart;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
  handleRemoveAllFromCart: () => void;
};

const CartDrawer = ({
  isOpen,
  onClose,
  cartProducts,
  handleAddToCart,
  handleRemoveFromCart,
  handleRemoveAllFromCart,
}: CardDrawerProps) => {
  const [productCounts, setProductCounts] = useState<Record<string, number>>(
    cartProducts.products.reduce(
      (counts, product) => ({ ...counts, [product.id]: product.amount }),
      {}
    )
  );

  useMemo(() => {
    setProductCounts(
      cartProducts.products.reduce(
        (counts, product) => ({ ...counts, [product.id]: product.amount }),
        {}
      )
    );
  }, [cartProducts.products]);

  const handleIncrease = (product: Product) => {
    setProductCounts((counts) => ({
      ...counts,
      [product.id]: (counts[product.id] || 0) + 1,
    }));
    handleAddToCart(product);
  };

  const handleDecrease = (product: Product) => {
    if (productCounts[product.id] > 1) {
      setProductCounts((counts) => ({
        ...counts,
        [product.id]: counts[product.id] - 1,
      }));
      handleRemoveFromCart(product);
    } else {
      setProductCounts((counts) => {
        const newCounts = { ...counts };
        delete newCounts[product.id];
        return newCounts;
      });
      handleRemoveFromCart(product);
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? "0" : "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 bottom-0 w-80 h-full bg-gray-100 shadow-lg z-50 overflow-y-auto"
    >
      <h1 className="flex flex-row items-center justify-between text-2xl font-bold p-4 border-b border-gray-200 w-full bg-blue-500 text-white">
        <div>Cart</div>
        <FaTimes className="cursor-pointer" onClick={onClose} />
      </h1>
      <div className="flex flex-col gap-4 p-4">
        {cartProducts.products.length > 0 ? (
          cartProducts.products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-full justify-between items-center border p-3 rounded-md bg-white gap-2"
            >
              <img
                src={product.image}
                alt={`${product.name} image`}
                width={120}
                height={120}
                className="rounded-lg border-2 border-gray-200"
              />
              <div className="flex flex-row w-full justify-between items-center">
                <p className="font-medium text-gray-800">{product.name}</p>
                <p className="font-bold">${product.price}</p>
                <div className="flex items-center gap-4">
                  <div className="flex flex-row items-center justify-center">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="text-white bg-red-500 p-2 rounded-md text-xs"
                    >
                      -
                    </button>
                    <p className="mx-2">{productCounts[product.id]}</p>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="text-white bg-green-500 p-2 rounded-md text-xs"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center font-bold">No products in cart</p>
        )}
      </div>
      <div className="flex justify-center items-center p-4">
        <p className="text-center font-bold">Total: ${cartProducts.total}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={() => {
              handleRemoveAllFromCart();
              setProductCounts({});
            }}
            className="p-2 text-white bg-red-500 w-3/4 rounded-md cursor-pointer"
          >
            Remove all
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={onClose}
            className="p-2 text-white bg-blue-500 w-3/4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartDrawer;
