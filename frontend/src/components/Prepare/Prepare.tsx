import classes from './Prepare.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'

import Spoon from './vectors/spoon.svg'
import Cup from './vectors/cup.svg'
import Thermometer from './vectors/thermometer.svg'
import Clock from './vectors/clock.svg'
import SunAndIce from './vectors/sun-ice.svg'


export const Prepare = () => {
    return(
        <div className={classes.prepareContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <h1 className={classes.prepareTittle}>PREPARO</h1>
                <div className={classes.prepareSteps}>
                    <div className={classes.step}>
                        <img src={Spoon} className={classes.stepImage} />
                        <br />
                        <p>2 Medidas<br /> de chá</p>
                    </div>
                    <div className={classes.step}>
                        <img src={Cup} className={classes.stepImage} />
                        <br />
                        <p>200 ML de água</p>
                    </div>
                    <div className={classes.step}>
                        <img src={Thermometer} className={classes.stepImage} />
                        <br />
                        <p>Temperatura de<br /> infusão: 100ºC</p>
                    </div>
                    <div className={classes.step}>
                        <img src={Clock} className={classes.stepImage} />
                        <br />
                        <p>Tempo de infusão<br /> 6 a 10 minutos</p>
                    </div>
                    <div className={classes.step}>
                        <img src={SunAndIce} className={classes.stepImage} />
                        <br />
                        <p>Beba quente ou<br /> gelado</p>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}