import { Header } from "../../components/shared/Header/Header.tsx";

import { Footer } from "../../components/shared/Footer/Footer.tsx"

import classes from './cart.module.css'

export const Cart = () => {
  return (
    <div className={classes.cartScreen}>
        <Header />

        <Footer />
    </div>
  );
}