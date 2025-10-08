import { Header } from "@/components/shared/Header/Header";

import { Footer } from "@/components/shared/Footer/Footer";

import classes from './build-your.module.css';

export default function BuildYour() {
  return (
    <div className={classes.buildYourScreen}>
        <Header />

        <Footer />
    </div>
  );
}