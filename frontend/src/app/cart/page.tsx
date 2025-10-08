import { Header } from "@/components/shared/Header/Header";

import { Footer } from "@/components/shared/Footer/Footer";

import classes from './cart.module.css'

export default function Cart() {
  return (
    <div className={classes.cartScreen}>
        <Header />

        <Footer />
    </div>
  );
}