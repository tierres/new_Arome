import classes from './FindNearestStore.module.css';
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'
import storeImg from './vectors/arome-store.png'
import locationIcon from './vectors/location-icon.svg'

export const FindNearestStore = () => {
    return(
        <div className={classes.findNearestStoreContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.text}>
                        Encontre a Aromê mais perto<br/>de <strong className={classes.strongText}>VOCÊ</strong>
                        <img src={locationIcon} alt="" />
                    </h1>
                </div>
                <div className={classes.storeImage}>
                    <img className={classes.image} src={storeImg} alt="" />
                </div>
            </SectionContainer>
        </div>
    )
}