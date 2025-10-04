import classes from './LittleProductCard.module.css'
import PlusIcon from './vectors/plus-icon.svg'
import FavIcon from './vectors/fav-icon.svg'
import { IGenericProduct } from '@/types/generic_product'

import { Link } from 'react-router-dom'

interface ILittleProductCardProps {
    product: IGenericProduct
}
   
export const LittleProductCard = ({product}: ILittleProductCardProps) => {
    return(
        <div className={classes.littleProductCardContainer}>
            <Link to={`/${product.type}/${product.slug}`} className={classes.topSideLink}>
            <div className={classes.topside}>
                <img className={classes.productImage} src={product.images[0]} />
                <h2 className={classes.productName}>
                    {product.name}
                </h2>
                <br/>
            </div>
            </Link>
            <div className={classes.bottomside}>
                <div className={classes.buttonsContainer}>
                    <button className={classes.buttons}>
                        <img src={PlusIcon} />
                    </button>
                    <button className={classes.buttons}>
                        <img src={FavIcon} />
                    </button>
                </div>
                <div className={classes.priceContainer}>
                    <p className={classes.aPartirDe}>A partir de</p>
                    <p className={classes.price}>R${product.price.toFixed(2)}</p>
                </div>            
            </div>
        </div>    
    )
}