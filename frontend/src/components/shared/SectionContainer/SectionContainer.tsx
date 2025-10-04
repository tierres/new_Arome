import { ReactNode } from 'react'
import classes from './SectionContainer.module.css'

interface SectionProps {
 children: ReactNode
 className?: string
}

export const SectionContainer = (params: SectionProps) => {
    return(
        <section className={classes.sectionContainer + " " + params.className}>
            {params.children}
        </section>
    )
}