import React from "react";
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../Title/Title";
import {faCode, faServer, faSitemap} from "@fortawesome/free-solid-svg-icons";
import {faCss3Alt, faHtml5, faJsSquare, faReact, faStripeS} from "@fortawesome/free-brands-svg-icons";
// @ts-ignore
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div id={'skills'} className={s.Skills}>
            <div className={s.skillsContainer}>
                <Title title={'My skills'}/>

                <div className={s.SkillWrapper}>
                    <Fade left>
                        <Skill title={"HTML"} context={"Semantic HTML,Landing Pages,Forms"} icon={faHtml5}/>
                        <Skill title={"CSS"} context={"CSS3,Sass/Less,CSS-Modules,Material-UI,Ant-design"}
                               icon={faCss3Alt}/>
                        <Skill title={"JS/TS"} context={`JS:,SOLID,Async functions,Promise,Async-await,Event-Loop,This; 
                    TypeScript: Migrate projects from JS to TS...`} icon={faJsSquare}/>
                        <Skill title={"React"}
                               context={"SPA,Functional/Class components,Hooks,React-router-dom,other libraries..."}
                               icon={faReact}/>
                    </Fade>
                    <Fade right>
                        <Skill title={"Redux"} context={"React-Redux,Redux-thunk,HOC,Selectors,Principles of Flux..."}
                               icon={faSitemap}/>
                        <Skill title={"Rest API"} context={"Axios library,CRUD-operations..."} icon={faServer}/>
                        <Skill title={"Testing"} context={"tdd, JEST, unit test, snapshot"} icon={faCode}/>
                        <Skill title={"Storybook"}
                               context={"Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. "}
                               icon={faStripeS}/>
                    </Fade>

                </div>

            </div>
        </div>
    )
}