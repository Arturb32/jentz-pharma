import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
      {/* Imagem */}
      <div className="relative aspect-square bg-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-shimmer"></div>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        {/* Título */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>

        {/* Preço */}
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>

        {/* Descrição */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
