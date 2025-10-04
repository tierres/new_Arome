import classes from './HowItWorks.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import teaImage from './vectors/marco-secchi-543132-unsplash.jpg'

export const HowItWorks = () => {
  return(
    <div className={classes.howItWorksContainer}>
      <SectionContainer className={classes.sectionContainer}>
        <div className={classes.textContainer}>
          <h1 className={classes.tittle}>
            Entenda
          </h1>
          <br />
          <p className={classes.paragraph}>
            Fazendo parte do nosso clube, você paga 
            um valor mensal e recebe na sua casa cinco 
            amostras de chás que são sucesso de vendas. 
            Assim consegue ter acesso a mais sabores, 
            pagando bem menos! Vem com a gente. 
            Durante o processo te explicamos melhor.
          </p>
        </div>
        <div>
          <img src={teaImage} alt="" />
        </div>
      </SectionContainer>
    </div>
  );
};
