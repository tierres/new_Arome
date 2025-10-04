import { Header } from "../../components/shared/Header/Header.tsx";

import { Footer } from "../../components/shared/Footer/Footer.tsx"

import classes from './build-your.module.css'

export const BuildYour = () => {
  return (
    <div className={classes.buildYourScreen}>
        <Header />

        <Footer />
    </div>
  );
}