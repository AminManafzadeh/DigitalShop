import { DATA } from '@/modules/products/mock/product';
import ProductDetail from '@/modules/products/components/ProductDetail';

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const Params = await params;
  console.log(Params.id);

  const product = DATA[0];

  return (
    <div>
      <ProductDetail {...product} />
    </div>
  );
}

export default SingleProductPage;
