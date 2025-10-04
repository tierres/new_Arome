import classes from './ProductCard.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import { useState } from 'react'
import { IGenericProduct } from '@/types/generic_product'

// import PlusIcon from './images/plus_icon.png'

interface IProductCardProps {
    product?: IGenericProduct;
  }

interface IProductGalleryProps {
    product: IGenericProduct
}

const ProductGallery = ({product} : IProductGalleryProps) => {
    const [bigImage, setBigImage] = useState<string>(product.images[0])

    return (
        <div className={classes.gallery}>
            <div className={classes.littleMedias}>
                {product.images.map((image, index) => (
                    <img key={index} className={classes.littleImage} src={image} onClick={() => setBigImage(image)}/>
                ))}
            </div>
            <div className={classes.bigMedia}>
                <img className={classes.bigImage} src={bigImage} alt="" />
            </div>
        </div>
    )
}

const CardButtons = () => {
    const [quantity, setQuantity] = useState<number>(1)

    const quantityDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const quantityIncrement = () => {
        setQuantity(quantity + 1)
    }

    return(
        <div className={classes.buttonsContainer}>
            <div className={classes.quantityButton}>
                <button className={classes.plusAndMinusButtons} onClick={quantityDecrement}>
                    <strong>-</strong>
                </button>
                <p className={classes.quantityNumber}><strong>{quantity}</strong></p>
                <button className={classes.plusAndMinusButtons} onClick={quantityIncrement}>
                    <strong>+</strong>
                </button>
            </div>
            <button className={classes.addCartButton}>
                Adicionar ao carrinho
                <img src='' />
            </button>
        </div>
    )
}

export const ProductCard = ({product} : IProductCardProps) => {
    if (!product) {
        return( //skeleton:
            <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.navigation}>
                    <p className={classes.navSkeleton}></p>
                </div>
                <div className={classes.mediaAndInfosContainer}>
                    <div className={classes.gallery}>
                        <div className={classes.littleMedias}>
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                            <div className={classes.littleImageSkeleton} />
                        </div>
                        <div className={classes.bigMedia}>
                            <div className={classes.bigImageSkeleton} />
                        </div>
                    </div>
                    <div className={classes.productInfos}>     
                        <div className={classes.tittleSkeleton}></div>
                        <hr />
                        <br />
                        <div className={classes.priceContainerSkeleton}>
                            <p className={classes.price}>R$</p>
                            <div className={classes.priceSkeleton}></div>
                        </div>
                        <br />
                        <br />
                        <div className={classes.buttonsContainer}>
                            <div className={classes.quantityButton}>
                                <button className={classes.plusAndMinusButtons}>
                                    <strong>-</strong>
                                </button>
                                <p className={classes.quantityNumber}><strong>0</strong></p>
                                <button className={classes.plusAndMinusButtons}>
                                    <strong>+</strong>
                                </button>
                            </div>
                            <button className={classes.addCartButton}>
                            Adicionar ao carrinho
                            <img src='' />
                            </button>
                        </div>
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre </h2>
                            <br />
                            <p className={classes.aboutParagraphSkeleton}>
                                *produto não encontrado*
                            </p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
        )
    }

    return(
        <div className={classes.productCardContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.mediaAndInfosContainer}>
                    <div>
                        <ProductGallery product={product} />
                    </div>
                    <div className={classes.productInfos}>     
                        <h1 className={classes.tittle}>{product.name}</h1>
                        <hr />
                        <br />
                        <p className={classes.price}>R$ {product.price.toFixed(2)}</p>
                        <br />
                        <br />
                        <CardButtons />
                        <div className={classes.aboutContainer}>
                            <hr />
                            <br />
                            <h2 className={classes.aboutH2}>Sobre {product.short_name}</h2>
                            <br />
                            <p className={classes.aboutParagraph}>
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}