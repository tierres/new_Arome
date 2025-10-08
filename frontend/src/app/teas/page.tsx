import { Header } from "@/components/shared/Header/Header";
import { InfusionsAndTeas } from "@/components/InfusionsAndTeas/InfusionsAndTeas"
import { Navigation } from "@/components/shared/Navigation/Navigation";
import { ProductList } from "@/components/shared/ProductList/ProductList";
import { Footer } from "@/components/shared/Footer/Footer";

import classes from './teas.module.css';

export default function Teas() {
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