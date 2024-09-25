import { useState } from "react";
import { Product } from "../types";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import ProductModal from "./ProductModal";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [productModalIsOpen, setProductModalIsOpen] = useState(false);

  const onModalClose = () => {
    setProductModalIsOpen(false);
  };

  const onModalOpen = () => {
    setProductModalIsOpen(true);
  };
  return (
    <div>
      <ProductModal
        isOpen={productModalIsOpen}
        onClose={onModalClose}
        product={product}
      />
      <div
        key={product.id}
        className="flex flex-col items-center justify-center h-full w-72 bg-blue-900 rounded-lg shadow-lg py-4 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 gap-2"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_JENTZ_S3_BUCKET}/${product.productImageUrl}`}
          alt="medicine"
          width={150}
          height={150}
        />
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="text-white mt-1">${product.price}</p>
        <div className="flex flex-row gap-2">
          <button
            onClick={onModalOpen}
            className="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded"
          >
            View Product
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded flex flex-row items-center justify-between gap-2">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
