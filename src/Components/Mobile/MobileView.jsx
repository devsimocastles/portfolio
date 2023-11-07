import React, { useEffect, useState } from "react";


//============== IMPORTING IMAGES AND SVG'S ===================================
import Logo from "../../img/icons/dev.png";
import { ReactComponent as BurguerMenuIcon } from "../../img/icons/burger-menu.svg";
import { ReactComponent as CloseIcon } from "../../img/icons/close.svg"
import { ReactComponent as ArrowDown } from "../../img/icons/down-arrow.svg";
import { ReactComponent as ArrowTurnDown } from "../../img/icons/arrow-turn-down-solid.svg";
import { ReactComponent as HtmlIcon } from "../../img/icons/html5.svg"
import { ReactComponent as CssIcon } from "../../img/icons/css3-alt.svg"
import { ReactComponent as JsIcon } from "../../img/icons/js.svg"
import { ReactComponent as NodejsIcon } from "../../img/icons/node-js.svg"
import { ReactComponent as ReactIcon } from "../../img/icons/react.svg"
import { ReactComponent as PhpIcon } from "../../img/icons/php.svg"
import { ReactComponent as Github } from "../../img/icons/logo-github.svg"
import { ReactComponent as Email } from "../../img/icons/envelope-solid.svg"

//=============================================================================


//========= Project Card Component =========================
import { ProjectCard } from "../ProjectCard";


export function MobileView() {

    const [menuOn, setMenuOn] = useState(false);
    const [disabledMenuWrapper, setDisabledMenuWrapper] = useState(false);

    const turnOnMenu = () => setMenuOn(true);
    const turnOffMenu = () => {
        setMenuOn(false);
        setTimeout(() => setDisabledMenuWrapper(true), 100);
    };


    return (
        <div className="mobile">
            <header className="hero-section">
                <div className="content">
                    <nav>
                        <div className="hamburger_menu">
                            <BurguerMenuIcon className="svg" onClick={() => turnOnMenu()} />
                        </div>
                        <div className="logo">
                            <img src={Logo} className="logo" alt="Devsimocastles logo" />
                        </div>
                    </nav>
                    <div className="title">
                        <h1>HOLA, SOY SIMÓN CASTILLO, Y ESTE ES MI PORTAFOLIO</h1>
                    </div>
                    <div className="arrow-down">
                        <ArrowDown />
                    </div>
                </div>
                <nav className={menuOn == true ? "lateral-menu active" : "lateral-menu"}>
                    <header>
                        <img src={Logo} alt="Devsimocastles logo" className="logo" />
                        <CloseIcon className="close" onClick={() => turnOffMenu()} />
                    </header>
                    <ul className="links">
                        <li><a href="#biografia">Sobre mí</a></li>
                        <li><a href="#lenguajes">Lenguajes</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </header>


            <section className="biography" id="biografia">
                <div className="content-wrapper">
                    <div className="history-container">
                        <p>
                            Nací en Maracaibo, Venezuela, el 28 de enero del 2005. Siempre tuve afinidad con la informática pero no fue sino hasta mis 16 años estando en Argentina que le dí una oportunidad, y encontré una pasión:
                        </p>
                    </div>
                    <div className="arrow-container">
                        <ArrowTurnDown />
                        <ArrowTurnDown />
                    </div>
                    <div className="web-development-container">
                        <p>El desarrollo web</p>
                    </div>

                </div>
                <div className="arrow-down">
                    <ArrowDown />
                </div>
            </section>


            <section className="languages" id="lenguajes">
                <div className="first-paragraph">
                    <p>En este periodo de tiempo me he dedicado al desarrollo FrontEnd, pero también indagué en el BackEnd</p>
                </div>
                <div className="arrow-down-secondary">

                </div>
                <div className="second-paragraph">
                    <p>Los lenguajes que manejo actualmente son los siguientes:</p>
                </div>
                <div className="bracket-container">
                </div>
                <div className="language-icon-container">
                    <HtmlIcon />
                    <CssIcon />
                    <JsIcon />
                    <NodejsIcon />
                    <ReactIcon />
                    <PhpIcon />
                </div>
                <div className="arrow-down">
                    <ArrowDown />
                </div>
            </section>


            <section className="projects" id="proyectos">
                <div className="heading">
                    <p>En todo este tiempo he realizado diversos proyectos, en esta sección los podrás ver</p>
                </div>
                <div className="bracket">

                </div>
                <div className="project-container">
                    <ProjectCard
                        title={"To-do App"}
                        url={"https://devsimocastles.github.io/todo-app/"}
                        img={"https://i.ibb.co/KyDTnss/todo-app.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Panel Redes Sociales"}
                        url={"https://devsimocastles.github.io/panel-redes-sociales/"}
                        img={"https://i.ibb.co/XDPDMNN/social-media-dashboard.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Calculadora React"}
                        url={"https://devsimocastles.github.io/calculadora-react/"}
                        img={"https://i.ibb.co/myftSXs/react-calculator.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Página inicio Snap"}
                        url={"https://devsimocastles.github.io/snap_homepage/"}
                        img={"https://i.ibb.co/37RH9xZ/snap-homepage.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Acortador de Enlaces"}
                        url={"https://devsimocastles.github.io/url_shortening_api/"}
                        img={"https://i.ibb.co/gZ7F4fh/url-shortening.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Rastreador IP"}
                        url={"https://devsimocastles.github.io/ip-tracker-app/"}
                        img={"https://i.ibb.co/6ytNx1H/rastreador-ip.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Página de inicio Bookmark"}
                        url={"https://devsimocastles.github.io/B-landing-page/"}
                        img={"https://i.ibb.co/T0PChgC/Any-Conv-com-bookmark-landing.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Diccionario de Países"}
                        url={"https://devsimocastles.github.io/country_dictionary_app/"}
                        img={"https://i.ibb.co/PzwnZRY/Any-Conv-com-contry-dictionary.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"App Clima"}
                        url={"https://devsimocastles.github.io/weather-app/"}
                        img={"https://i.ibb.co/zVDm2Fw/Any-Conv-com-app-clima.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Proyecto Mini E-Shop"}
                        url={"https://devsimocastles.github.io/entrega-proyecto-final/"}
                        img={"https://i.ibb.co/DWH403d/Any-Conv-com-eshop.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Convert-2"}
                        url={"https://devsimocastles.github.io/entrega-final-js/"}
                        img={"https://i.ibb.co/2yDd2Ym/Any-Conv-com-convert-2.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Notas"}
                        url={"https://app-notas-devsimocastles.000webhostapp.com/views/login.php"}
                        img={"https://i.ibb.co/9prKyF7/notas.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Plataforma Sofcabeauty"}
                        url={"https://plataforma-sofcabeauty.000webhostapp.com/"}
                        img={"https://i.ibb.co/vcxPTgW/plataforma-sofcabeauty.webp"}
                        isMobile={true}
                    />
                    <ProjectCard
                        title={"Primer Proyecto Web (Inicios 2022)"}
                        url={"https://devsimocastles.github.io/proyecto-coderhouse/"}
                        img={"https://i.ibb.co/LSHxNq2/primer-proyecto.png"}
                        isMobile={true}
                    />
                </div>
                <div className="arrow-down">
                    <ArrowDown />
                </div>
            </section>
            <footer id="contacto">
                <header>
                    <h2>¿Como puedes contactarme?</h2>
                </header>
                <div className="wrapper">
                    <div className="arrows">
                        <div className="arrow-down"></div>
                        <div className="arrow-down"></div>
                    </div>
                    <div className="icons">
                        <a
                            href="mailto:simocastles@gmail.com?Subject=Hola%20Simon%20quiero%20trabajar%20contigo"
                            target="_blank"
                        >

                            <Email />
                        </a>
                        <a href="https://github.com/devsimocastles" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
                <h4 className="credits">Simón Castillo © 2023</h4>
            </footer>
        </div>
    )
}

