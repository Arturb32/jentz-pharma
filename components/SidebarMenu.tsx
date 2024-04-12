import { useState } from "react";
import { Product } from "../types";
import { FaTimes } from "react-icons/fa";

type SidebarMenuProps = {
  setProducts?: (products: Product[]) => void;
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
};

const SidebarMenu = ({
  products,
  setProducts,
  isOpen,
  onClose,
}: SidebarMenuProps) => {
  const [searchName, setSearchName] = useState("");
  const [searchType, setSearchType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Example handlers that you might use for updating state
  // These can be adapted to trigger filtering logic
  const handleSearchNameChange = (e) => setSearchName(e.target.value);
  const handleSearchTypeChange = (e) => setSearchType(e.target.value);
  const handleMinPriceChange = (e) => setMinPrice(e.target.value);
  const handleMaxPriceChange = (e) => setMaxPrice(e.target.value);

  return (
    <div
      hidden={!isOpen}
      className="w-1/4 h-screen bg-gray-100 p-4 translate-x-2"
    >
      <h1 className="flex flex-row items-center justify-between text-2xl font-bold p-4 border-b border-gray-200 w-full bg-blue-500 text-white">
        <div>Search Products</div>
        <FaTimes className="cursor-pointer" onClick={onClose} />
      </h1>
      {/* Search by Name */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by name"
          className="w-full p-2 rounded-lg"
          value={searchName}
          onChange={handleSearchNameChange}
        />
      </div>

      {/* Search by Type */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Search by type"
          className="w-full p-2 rounded-lg"
          value={searchType}
          onChange={handleSearchTypeChange}
        />
      </div>

      {/* Filter by Price */}
      <div className="mt-4">
        <h2 className="text-gray-800 text-lg font-bold">Filter by Price</h2>
        <div className="flex space-x-2 mt-2">
          <input
            type="number"
            placeholder="Min price"
            className="w-1/2 p-2 rounded-lg"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            placeholder="Max price"
            className="w-1/2 p-2 rounded-lg"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>
      <button className="bg-white text-blue-800 px-4 py-2 mt-4 rounded-lg">
        Search
      </button>
    </div>
  );
};

export default SidebarMenu;
