import { Header } from "@/components/shared/Header/Header";
import { UtensilsBanner } from "@/components/UtensilsBanner/UtensilsBanner";
import { Navigation } from "@/components/shared/Navigation/Navigation";
import { ProductList } from "@/components/shared/ProductList/ProductList";
import { Footer } from "@/components/shared/Footer/Footer";

import classes from './utensils.module.css';

export default function Utensils() {
  return (
    <div className={classes.utensilsScreen}>
        <Header />
        <UtensilsBanner />
        <Navigation typeLink="/utensils/" typeLabel="Utensílios" />
        <ProductList productType="utensils" />
        <Footer />
    </div>
  );
}