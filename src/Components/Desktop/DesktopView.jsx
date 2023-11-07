import React from "react";

//============== IMPORTING IMAGES AND SVG'S =====================
import Logo from "../../img/icons/dev.png";
import { ReactComponent as BurguerMenuIcon } from "../../img/icons/burger-menu.svg";
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

//======================================================================

import { ProjectCard } from "../ProjectCard.jsx";
import { Footer } from "../Footer.jsx";


export function DesktopView() {
    return (
        <div className="desktop">
            <section className="hero-section">
                <header>
                    <nav>
                        <ul className="links">
                            <li>
                                <a href="#biography">Sobre mí</a>
                            </li>
                            <li>
                                <a href="#languages">Lenguajes</a>
                            </li>
                            <li>
                                <a href="#projects">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact">Contacto</a>
                            </li>
                        </ul>
                        <div className="logo">
                            <img src={Logo} alt="Devsimocastles" />
                        </div>
                    </nav>
                </header>
                <h1>Hola, soy Simón Castillo y este es mi portafolio</h1>
                <div className="arrow-down">
                    <ArrowDown />
                </div>
            </section>

            <section id="biography" className="biography">
                <div className="wrapper">
                    <p className="history">Nací en Maracaibo, Venezuela, el 28 de enero del 2005. Siempre tuve afinidad con la informática pero no fue sino hasta mis 16 años estando en Argentina que le dí una oportunidad, y encontré una pasión:</p>
                    <ArrowTurnDown className="arrows" /> <ArrowTurnDown className="arrows" />
                    <h2 className="web-design">El Desarrollo Web</h2>
                </div>
                <ArrowDown className="arrow-down" />
            </section>

            <section id="languages" className="languages">
                <div className="wrapper">
                    <div className="paragraph-container">
                        <p className="primary-paragraph">
                            En este periodo de tiempo me he dedicado al desarrollo FrontEnd, pero también indagué en el BackEnd
                        </p>
                        <div className="arrow-down-bold">

                        </div>
                        <p className="secondary-paragraph">
                            Los lenguajes que manejo actualmente son los siguientes:
                        </p>
                    </div>
                    <ArrowTurnDown className="arrow" />
                    <div className="languages-container">
                        <HtmlIcon /> <CssIcon />
                        <JsIcon />
                        <NodejsIcon />
                        <ReactIcon /> <PhpIcon />

                    </div>
                </div>
                <ArrowDown className="arrow-down" />
            </section>


            <section id="projects" className="projects">
                <h2>En todo este tiempo he realizado diversos proyectos, en esta sección los podrás ver</h2>
                <div className="bracket">

                </div>
                <div className="project-card-container">
                    <ProjectCard
                        title={"To-do App"}
                        url={"https://devsimocastles.github.io/todo-app/"}
                        img={"https://i.ibb.co/KyDTnss/todo-app.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Panel Redes Sociales"}
                        url={"https://devsimocastles.github.io/panel-redes-sociales/"}
                        img={"https://i.ibb.co/XDPDMNN/social-media-dashboard.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Calculadora React"}
                        url={"https://devsimocastles.github.io/calculadora-react/"}
                        img={"https://i.ibb.co/myftSXs/react-calculator.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Página inicio Snap"}
                        url={"https://devsimocastles.github.io/snap_homepage/"}
                        img={"https://i.ibb.co/37RH9xZ/snap-homepage.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Acortador de Enlaces"}
                        url={"https://devsimocastles.github.io/url_shortening_api/"}
                        img={"https://i.ibb.co/gZ7F4fh/url-shortening.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Rastreador IP"}
                        url={"https://devsimocastles.github.io/ip-tracker-app/"}
                        img={"https://i.ibb.co/6ytNx1H/rastreador-ip.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Página de inicio Bookmark"}
                        url={"https://devsimocastles.github.io/B-landing-page/"}
                        img={"https://i.ibb.co/T0PChgC/Any-Conv-com-bookmark-landing.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Diccionario de Países"}
                        url={"https://devsimocastles.github.io/country_dictionary_app/"}
                        img={"https://i.ibb.co/PzwnZRY/Any-Conv-com-contry-dictionary.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"App Clima"}
                        url={"https://devsimocastles.github.io/weather-app/"}
                        img={"https://i.ibb.co/zVDm2Fw/Any-Conv-com-app-clima.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Proyecto Mini E-Shop"}
                        url={"https://devsimocastles.github.io/entrega-proyecto-final/"}
                        img={"https://i.ibb.co/DWH403d/Any-Conv-com-eshop.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Convert-2"}
                        url={"https://devsimocastles.github.io/entrega-final-js/"}
                        img={"https://i.ibb.co/2yDd2Ym/Any-Conv-com-convert-2.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Notas"}
                        url={"https://app-notas-devsimocastles.000webhostapp.com/views/login.php"}
                        img={"https://i.ibb.co/9prKyF7/notas.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Plataforma Sofcabeauty"}
                        url={"https://plataforma-sofcabeauty.000webhostapp.com/"}
                        img={"https://i.ibb.co/vcxPTgW/plataforma-sofcabeauty.webp"}
                        isMobile={false}
                    />
                    <ProjectCard
                        title={"Primer Proyecto Web (Inicios 2022)"}
                        url={"https://devsimocastles.github.io/proyecto-coderhouse/"}
                        img={"https://i.ibb.co/LSHxNq2/primer-proyecto.png"}
                        isMobile={false}
                    />
                </div>
                <ArrowDown className="arrow-down" />
            </section>

            <Footer />
        </div>
    )
}

