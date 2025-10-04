import { Header } from "../../components/shared/Header/Header.tsx";
import { InfusionsAndTeas } from "../../components/InfusionsAndTeas/InfusionsAndTeas.tsx"
import { Navigation } from "../../components/shared/Navigation/Navigation.tsx";
import { ProductList } from "../../components/shared/ProductList/ProductList.tsx";
import { Footer } from "../../components/shared/Footer/Footer.tsx"

import classes from './teas.module.css'

export const Teas = () => {
  return (
    <div className={classes.teasScreen}>
        <Header />
        <InfusionsAndTeas />
        <Navigation typeLink="/teas/" typeLabel="Chás" />
        <ProductList productType="teas" />
        <Footer />
    </div>
  );
}