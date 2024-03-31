import { FaTimes } from "react-icons/fa";
import { Product } from "../types";

type ProductModalProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-middle bg-white rounded-lg gap-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 py-5 sm:p-6">
            <div className="mb-4 ">
              <h2 className="flex flex-row items-center justify-between text-2xl font-semibold text-gray-800">
                <div>{product.name}</div>
                <FaTimes className="cursor-pointer" onClick={onClose} />
              </h2>
              <div className="flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={`${product.name} image`}
                  width={200}
                  height={200}
                  className="rounded-lg border-2 border-blue-600"
                />
              </div>
              <p className="text-sm text-gray-700 text-justify">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600">Price:</p>
                <p className="text-sm font-semibold text-gray-800">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Stock:</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.stock}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Category:</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.category}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Stock:</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.stock}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Manufacturer:</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.manufacturer}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Expiration Date:</p>
                <p className="text-sm font-semibold text-gray-800">
                  {product.expirationDate}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductModal;
