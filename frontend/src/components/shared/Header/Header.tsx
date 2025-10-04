import classes from './Header.module.css'
// import Image from 'next/image';

import LogoDesktop from './vectors/logo_desktop.svg'
import LogoMobile from './vectors/logo_mobile.svg'
import Cart from './vectors/cart.svg'
import Lupa from './vectors/lupa.svg'
import User from './vectors/user.svg'

import { SectionContainer } from '../SectionContainer/SectionContainer'

import Link from 'next/link';
import { CustomLink } from '../CustomLink/CustomLink'

import { Menu } from '../../Menu/Menu'


export const Header = () => {
  return(
    <header className={classes.headerContainer}> 
      <SectionContainer className={classes.sectionContainer}>  
        <div className={classes.logoContainer}>
          <Link href='/'>
            <picture>
              <source srcSet={LogoMobile} media='(max-width: 768px)' />
              <img 
                className={classes.logoImg} 
                src={LogoDesktop} 
                alt="Logo do site"/>
            </picture>
          </Link>
        </div>
      
        <div className={classes.linksContainer}>
          <nav className={classes.navLinksContainer}>
            <CustomLink className={classes.linkStyle} to='/about'>SAIBA MAIS</CustomLink>
            <span className={classes.linkStyle}>•</span>
            <CustomLink className={classes.linkStyle} to='/teas'>CHÁS</CustomLink>
            <span className={classes.linkStyle}>•</span>
            <CustomLink className={classes.linkStyle} to='/utensils'>UTENSÍLIOS</CustomLink>
            <span className={classes.linkStyle}>•</span>
            <CustomLink className={classes.linkStyle} to='/build-your'>MONTE O SEU</CustomLink>
            <span className={classes.linkStyle}>•</span>
            <CustomLink className={classes.linkStyle} to='/become-a-member'>AROME CLUB</CustomLink>
          </nav>
        </div>

        <div className={classes.iconsLinksContainer}>
          <button className={classes.cartButton}>
            <Cart />
            {/* <img src={Cart} alt="Botão Carrinho" /> */}
          </button>
          <button className={classes.searchButton}>
            <Lupa />
            {/* <img src={Lupa} alt="Botão Pesquisar" /> */}
          </button>
          <button className={classes.userButton}>
            <User />
            {/* <img src={User} alt="Botão Painel de Usuário" /> */}
          </button>
          <Menu />
        </div>
      </SectionContainer>
    </header>
     
  );
};



// Tierres Griep