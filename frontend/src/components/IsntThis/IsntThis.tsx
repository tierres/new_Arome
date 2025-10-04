import classes from './IsntThis.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import IsntThisImgTea from './vectors/monika-grabkowska-452370-unsplash.svg'
import IsntThisImgUtensil from './vectors/conj-cha-utensils.png'

import { Link } from 'react-router-dom'

interface IIsntThisProps {
    productType: string
}

const teasText = <>NÃO ERA ESSE CHÁ QUE BUSCAVA?<br />EXPERIMENTE MONTAR O SEU</>
const utensilsText = <>NÃO ERA O QUE PROCURAVA?<br />VEJA TODOS NOSSOS UTENSÍLIOS</> 

export const IsntThis = ({ productType }: IIsntThisProps) => {
    return(
        <div className={classes.isntThisContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.paragraphContainer}>
                    <p>
                    {productType === 'teas' ? teasText : utensilsText}
                    </p>
                </div>
                <div className={classes.imgAndButtonContainer}>
                    <img src={productType === 'teas' ? IsntThisImgTea : IsntThisImgUtensil} alt="Aromê" className={classes.imgStyle}/>
                    <Link to={productType === 'teas' ? '/build-your' : '/utensils'} className={classes.linkStyle}>
                        Acesse &gt;
                    </Link>
                </div>
            </SectionContainer>
        </div>
    )
}