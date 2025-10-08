import { useParams } from 'next/navigation';
import { ProductPage } from '@/components/ProductPage/page';

export default function UtensilProductPage() {
  const { slug } = useParams();

  return (
    <ProductPage
      productType="utensils"
      typeLabel="Utensílios"
      typeLink="/utensils/"
      slug={slug}
    />
  );
}