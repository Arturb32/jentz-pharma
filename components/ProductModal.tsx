import React from "react";
import { FaTimes } from "react-icons/fa";
import { Product } from "../types";
import { useMedication } from "../hooks/useMedication";

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
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="flex flex-row items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                {product.name}
              </h2>
              <FaTimes className="cursor-pointer" onClick={onClose} />
            </div>
            <p className="text-sm text-gray-700 text-justify mb-4">
              {product.description}
            </p>
            {medication && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Medication Details
                </h3>
                <p className="text-sm text-gray-700 mb-1">
                  Dosage: {medication.dosage}
                </p>
                <p className="text-sm text-gray-700">
                  Side Effects: {medication.sideEffects}
                </p>
                <p className="text-sm text-gray-700">
                  {`Prescription required: ${
                    medication.prescriptionRequired ? "Yes" : "No"
                  }`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
