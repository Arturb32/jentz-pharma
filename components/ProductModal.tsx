import React from "react";
import { Product } from "../types";
import { useMedication } from "../hooks/useMedication";
import Image from "next/image";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen) return null;

  const { medication } = useMedication(product.medicationId);

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Overlay */}
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-900/75 backdrop-blur-sm"></div>
        </div>

        {/* Modal */}
        <div className="inline-block align-middle bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          {/* Cabeçalho */}
          <div className="bg-blue-900 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">
              Detalhes do Produto
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Fechar modal"
            >
              <span className="text-2xl">×</span>
            </button>
          </div>

          {/* Conteúdo */}
          <div className="bg-white">
            {/* Imagem e Informações Básicas */}
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 aspect-square bg-gray-100">
                <img
                  src={`${process.env.NEXT_PUBLIC_JENTZ_S3_BUCKET}/${product.productImageUrl}`}
                  alt="medicine"
                  width={150}
                  height={150}
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-3xl font-bold text-blue-900 mb-4">
                  R$ {product.price.toFixed(2)}
                </p>
                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>
            </div>

            {/* Detalhes do Medicamento */}
            {medication && (
              <div className="border-t border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Informações do Medicamento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Dosagem
                    </h4>
                    <p className="text-gray-900">{medication.dosage}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Efeitos Colaterais
                    </h4>
                    <p className="text-gray-900">{medication.sideEffects}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">
                      Prescrição Necessária
                    </h4>
                    <p className="text-gray-900">
                      {medication.prescriptionRequired ? "Sim" : "Não"}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
