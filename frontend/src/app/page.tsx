import { Header } from "@/components/shared/Header/Header";
import { SintaOPrazerDoAroma } from "@/components/SintaOPrazerDoAroma/SintaOPrazerDoAroma";
import { LearnHowTo } from "@/components/LearnHowTo/LearnHowTo";
import { HighlightedProducts } from "@/components/HighlightedProducts/HighlightedProducts";
import { FindNearestStore } from "@/components/FindNearestStore/FindNearestStore";
import { Footer } from "@/components/shared/Footer/Footer";

import classes from 'page.module.css'

export default function Home() {
  return (
    <div className={classes.homeScreen}>
      <Header/>
      <SintaOPrazerDoAroma/>
      <HighlightedProducts/>
      <LearnHowTo/>
      <FindNearestStore/>
      <Footer/>
    </div>
  );
}