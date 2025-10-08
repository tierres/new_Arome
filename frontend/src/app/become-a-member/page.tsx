import { Header } from "@/components/shared/Header/Header";
import { SejaUmSocio } from "@/components/SejaUmSocio/SejaUmSocio";
import { HowItWorks } from "@/components/HowItWorks/HowItWorks";
import { ClubForm } from "@/components/ClubForm/ClubForm";
import { Footer } from "@/components/shared/Footer/Footer";

import classes from './become-a-member.module.css';

export default function BecomeAMember() {
  return (
    <div className={classes.becomeAMemberScreen}>
        <Header />
        <SejaUmSocio />
        <HowItWorks />
        <ClubForm />
        <Footer />
    </div>
  );
}