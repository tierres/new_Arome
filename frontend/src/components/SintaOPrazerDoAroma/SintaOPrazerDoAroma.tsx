import classes from './SintaOPrazerDoAroma.module.css'
import sintaImg from './vectors/sinta-img-w-text.jpg'


export const SintaOPrazerDoAroma = () => {
  return(
    <div className={classes.sintaConteiner}>
      <img className={classes.img} src={sintaImg} alt='sinta o prazer do aroma'/>
    </div>
  );
};

