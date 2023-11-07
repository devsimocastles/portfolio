import React from "react";
import { ReactComponent as Placeholder } from "../img/placeholder.svg";

export function ProjectCard({img, title, isMobile, url}){
    return (
        <article className={isMobile === true ? "project-card mobile" : "project-card desktop"}>
            <div className="project-img">
                <img src={img} alt={title} />
            </div>
            <header>
                <h3>{title}</h3>
            </header>
            <a href={url} target="_blank" className="cta">Ir al sitio</a>
        </article>
    );
}