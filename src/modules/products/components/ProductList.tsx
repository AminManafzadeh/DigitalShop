import { DATA } from '../mock/product';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <div className="flex flex-wrap items-center justify-between w-full my-10">
      {DATA?.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
