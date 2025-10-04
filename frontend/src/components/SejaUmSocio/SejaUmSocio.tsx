import classes from './SejaUmSocio.module.css'
import socioImg from './vectors/canva-1.jpg'

export const SejaUmSocio = () => {
  return(
    <div className={classes.socioContainer}>
      <img className={classes.img} src={socioImg} alt="Seja um Sócio Aromê" />
    </div>
  );
};
