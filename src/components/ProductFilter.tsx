import { useRecoilState } from "recoil";
import { categoryFilterState, priceFilterState } from "../state/filterAtom";

export default function ProductFilter() {
  const [category, setCategory] = useRecoilState(categoryFilterState);
  const [price, setPrice] = useRecoilState(priceFilterState);

  return (
    <div className="flex flex-wrap gap-4 mt-6 justify-center">
      {/* Category Dropdown */}
      <select value={category} onChange={e => setCategory(e.target.value)} className="p-2 rounded-md border">
        <option>All</option>
        <option>Electronics</option>
        <option>Books</option>
        <option>Clothing</option>
      </select>

      {/* Price Range Inputs */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={price[0]}
          onChange={e => setPrice([+e.target.value, price[1]])}
          className="w-16 p-2 rounded-md border"
        />
        <span>-</span>
        <input
          type="number"
          value={price[1]}
          onChange={e => setPrice([price[0], +e.target.value])}
          className="w-16 p-2 rounded-md border"
        />
      </div>
    </div>
  );
}