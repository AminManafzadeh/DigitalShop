import { prisma } from '@/lib/prisma';
import ProductListView from '@/modules/products/views/ProductListView';

async function Products() {
  const products = await prisma.product.findMany();
  console.log(products);
  return (
    <div>
      <ProductListView />
    </div>
  );
}

export default Products;
