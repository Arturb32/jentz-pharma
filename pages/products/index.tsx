import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types";
import SkeletonLoader from "../../components/SkeletonLoader";

const Products = () => {
  const { error, isError, isLoading, products } = useProducts();

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Produtos
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Conheça nossa linha completa de produtos farmacêuticos,
              desenvolvidos com tecnologia de ponta e qualidade superior
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          ) : isError ? (
            <div className="text-center py-12">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-medium text-red-800 mb-2">
                  Erro ao carregar produtos
                </h3>
                <p className="text-red-600">{error}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Jentz Pharma. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
