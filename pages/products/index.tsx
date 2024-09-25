import { useState } from "react";
import ProductCard from "../../components/ProductCard";

import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types";
import SkeletonLoader from "../../components/SkeletonLoader";

const Products = () => {
  const { error, isError, isLoading, products } = useProducts();

  return (
    <div className="bg-gradient-to-b from-blue-200 to-blue-400 min-h-screen flex flex-col items-center justify-center">
      <div className="flex">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {isLoading ? (
            <SkeletonLoader />
          ) : isError ? (
            <div>{error}</div>
          ) : (
            products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
