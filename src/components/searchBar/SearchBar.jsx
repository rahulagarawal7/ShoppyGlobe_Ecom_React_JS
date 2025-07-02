import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 max-w-2xl mx-auto my-4 sm:my-6">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-indigo-500" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search for products, brands or categories..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-indigo-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 text-gray-700 placeholder-gray-400 transition-all duration-150 text-sm sm:text-base"
        />
      </div>
    </div>
  );
};

export default SearchBar;
