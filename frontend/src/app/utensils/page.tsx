import { Header } from "../../components/shared/Header/Header.tsx";
import { UtensilsBanner } from "../../components/UtensilsBanner/UtensilsBanner.tsx";
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx";
import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import classes from './utensils.module.css'

export const Utensils = () => {
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