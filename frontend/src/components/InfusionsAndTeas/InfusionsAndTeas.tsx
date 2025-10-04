import classes from './InfusionsAndTeas.module.css'
import infusionsAndTeasImg from './images/forDesktop.jpg'

export const InfusionsAndTeas = () => {
  return(
    <div className={classes.imageContainer}>
      <img className={classes.img} src={infusionsAndTeasImg} alt='Chás'/>
    </div>
  );
};
