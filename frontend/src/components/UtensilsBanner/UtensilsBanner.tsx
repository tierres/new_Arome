import classes from './UtensilsBanner.module.css'
import UtensilsImg from './images/UTENSÍLIOS.png'

export const UtensilsBanner = () => {
  return(
    <div className={classes.imageContainer}>
        <img className={classes.img} src={UtensilsImg} alt="Chás" />
    </div>
  );
};
