import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ProductFilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  sortOrder: string;
  onSortChange: (value: string) => void;
  filterOptions?: string[];
  selectedFilter?: string;
  onFilterSelect?: (value: string) => void;
}

const SORT_OPTIONS = [
  { label: 'Nổi bật', value: 'featured' },
  { label: 'Giá thấp đến cao', value: 'price-low' },
  { label: 'Giá cao đến thấp', value: 'price-high' },
  { label: 'Tên A-Z', value: 'az' },
];

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
  searchValue,
  onSearchChange,
  sortOrder,
  onSortChange,
  filterOptions,
  selectedFilter,
  onFilterSelect,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-b border-rs-border py-4 mb-8 gap-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
        {filterOptions && onFilterSelect && (
          <div className="relative group">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
              Lọc: {selectedFilter === 'all' ? 'Tất cả' : selectedFilter} <ChevronDown size={12} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-rs-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => onFilterSelect(option)}
                  className="block w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-rs-gray-light"
                >
                  {option === 'all' ? 'Tất cả' : option}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center w-full max-w-[360px] border border-rs-border p-3">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm sản phẩm..."
            className="w-full text-[10px] uppercase tracking-[0.2em] font-sans focus:outline-none"
          />
        </div>
      </div>

      <div className="relative group w-full lg:w-auto">
        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:opacity-50 transition-opacity">
          Sắp xếp: {SORT_OPTIONS.find((option) => option.value === sortOrder)?.label || 'Nổi bật'} <ChevronDown size={12} />
        </button>
        <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-rs-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-40 text-right">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className="block w-full text-right px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-rs-gray-light"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterBar;
