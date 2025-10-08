import { useParams } from 'next/navigation';
import { ProductPage } from '@/components/ProductPage/page';

export default function TeaProductPage() {
  const { slug } = useParams();

  return (
    <ProductPage
      productType="teas"
      typeLabel="Chás"
      typeLink="/teas/"
      slug={slug}
    />
  );
}