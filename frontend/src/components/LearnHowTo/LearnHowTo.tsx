import classes from './LearnHowTo.module.css'
import { SectionContainer } from '../shared/SectionContainer/SectionContainer'

export const LearnHowTo = () => {
    return(
        <div className={classes.learnHowToContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div>
                    <h1 className={classes.text}>Aprenda a montar o seu chá<br/>GOURMET</h1>
                </div>
                
                <div>
                    <iframe className={classes.video} width="560" height="315" src="https://www.youtube.com/embed/QGp1zGEC93s?si=viEa0LX4UDEJtHjr" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </SectionContainer>     
        </div>
    )
}