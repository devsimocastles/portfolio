import React from "react";

import { ReactComponent as Github } from "../img/icons/logo-github.svg"
import { ReactComponent as Email } from "../img/icons/envelope-solid.svg"

export function Footer (){
    return (
    <footer>
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
    );
}

