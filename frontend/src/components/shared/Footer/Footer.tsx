import { SectionContainer } from "../SectionContainer/SectionContainer"
import classes from './Footer.module.css'

import ReducedLogo from './vectors/arome-reduced-logo.png'
import VisaLogo from './vectors/visa-logo.svg'
import MasterCardLogo from './vectors/mastercard-logo.svg'
import EloLogo from './vectors/elo-logo.svg'
import BoletoLogo from './vectors/boleto-logo.svg'
import InstagramLogo from './vectors/instagram-logo.svg'
import FacebookLogo from './vectors/facebook-logo.svg'
import Xlogo from './vectors/x-logo.png'
import YoutubeLogo from './vectors/youtube-logo.svg'

interface ICustomNavAnchor {
    label: string
    to: string
}

interface ICustomNav {
    children: string
    anchors: ICustomNavAnchor[]
}

const CustomNav = (params: ICustomNav) => {
    return (
        <div className={classes.customNav}>
            <h1 className={classes.footerTittles}>{params.children}</h1>

            {params.anchors.map((anchor, index) => (
                <a className={classes.customNavAnchors} key={index} href={anchor.to}>
                    {anchor.label}
                </a>
            ))}    
        </div>
    )
}

export const Footer = () => {
    return (
        <footer className={classes.footerContainer}>
            <SectionContainer className={classes.sectionContainer}>
                <div className={classes.upSide}>
                    <div className={classes.upSideLeft}>
                        <img src={ReducedLogo} alt="Aromê" />
                    </div>

                    <div className={classes.upSideRight}>
                        <CustomNav anchors={[{label: "A Aromê", to: ""}, {label: "Pagamentos", to: ""}, {label: "Política de Privacidade", to: ""}, {label: "Segurança", to: ""}, {label: "Seja sócio", to: "/become-a-member"}, {label: "Seja um franqueado", to: ""}, {label: "Trocas e devoluções", to: ""}]}>
                            INSTITUCIONAL
                        </CustomNav>
                        <CustomNav anchors={[{label: "contato@arome.com.br", to: "mailto:contato@arome.com.br"}, {label: "(53) 98144-3026", to: ""}]}>
                            CONTATO
                        </CustomNav>
        

                        <div className={classes.paymentsAndSocialContainer}>
                            <div className={classes.socialContainer}>
                                <h3 className={classes.footerTittles}>REDES SOCIAIS</h3>
                                <div className={classes.logosContainer}>
                                    <a href="https://www.instagram.com/arome/">
                                        <img className={classes.logo} src={InstagramLogo} alt="Instagram Logo" />
                                    </a>
                                    <a href="https://pt-br.facebook.com/arome/">
                                        <img className={classes.logo} src={FacebookLogo} alt="Facebook Logo" />
                                    </a>
                                    <a href="https://twitter.com/arome">
                                        <img className={classes.Xlogo} src={Xlogo} alt="X Logo" />
                                    </a>
                                    <a href="https://www.youtube.com/user/arome">
                                        <img className={classes.logo} src={YoutubeLogo} alt="Youtube Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className={classes.paymentsContainer}>
                                <h3 className={classes.footerTittles}>FORMAS DE PAGAMENTO</h3>
                                <div className={classes.logosContainer}>
                                        <img className={classes.logo} src={VisaLogo} alt="Visa Logo" />
                                        <img className={classes.logo} src={MasterCardLogo} alt="MasterCard Logo" />
                                        <img className={classes.logo} src={EloLogo} alt="Elo Logo" />
                                        <img className={classes.logo} src={BoletoLogo} alt="Boleto Logo" />
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className={classes.bottomSide}>
                    <p>
                    Aromê - COMÉRCIO DE CHÁ. Todos os direitos reservados. Proibida reprodução total ou parcial. Preços e estoque sujeito a alterações sem aviso prévio. CNPJ: 14.977.653/0001-29 - Rua Albino Brod - Pelotas/RS
                    </p>
                </div>
            </SectionContainer>
        </footer>
    )
}