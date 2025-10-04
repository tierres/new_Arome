import { NavLink } from 'react-router-dom'

import classes from './CustomLink.module.css'

interface ICustomLink {
    className?: string
    to: string
    children: string
  }
  
export const CustomLink = (params: ICustomLink) => {
    return (
      <NavLink
        className={({ isActive }) => classes.linkStyle + ' ' + (isActive ? classes.activeLink : "")}
        to={params.to}
      >
        {params.children}
      </NavLink>
    );
  };