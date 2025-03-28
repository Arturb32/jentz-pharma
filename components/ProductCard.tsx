import { useState } from "react";
import { Product } from "../types";
import Image from "next/image";
import { FaShoppingCart, FaEye } from "react-icons/fa";
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
    <div className="group">
      <ProductModal
        isOpen={productModalIsOpen}
        onClose={onModalClose}
        product={product}
      />
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Imagem do Produto */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={`${process.env.NEXT_PUBLIC_JENTZ_S3_BUCKET}/${product.productImageUrl}`}
            alt="medicine"
            width={350}
            height={350}
          />
          {/* Overlay com botões */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <button
              onClick={onModalOpen}
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
              aria-label="Ver detalhes do produto"
            >
              <span className="text-xl">👁️</span>
            </button>
            <button
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
              aria-label="Adicionar ao carrinho"
            >
              <span className="text-xl">🛒</span>
            </button>
          </div>
        </div>

        {/* Informações do Produto */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>

          {/* Preço */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-blue-900">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          {/* Descrição */}
          {product.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>
          )}

          {/* Botões de Ação */}
          <div className="flex gap-2">
            <button
              onClick={onModalOpen}
              className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-2"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
