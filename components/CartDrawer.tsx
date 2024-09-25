import { motion } from "framer-motion";
import { Product } from "../types";
import { FaTimes } from "react-icons/fa";

type CardDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  handleAddToCart: (product: Product) => void;
  handleRemoveFromCart: (product: Product) => void;
  handleRemoveAllFromCart: () => void;
};

const CartDrawer = ({
  isOpen,
  onClose,
  handleAddToCart,
  handleRemoveFromCart,
  handleRemoveAllFromCart,
}: CardDrawerProps) => {
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
      <div className="p-4">
        <p className="text-center font-bold">Your cart is empty</p>
      </div>
    </motion.div>
  );
};

export default CartDrawer;
