import React from "react";
import s from './Skill.module.scss'
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SkillPropsType = {
    title: string
    context: string
    icon?: IconDefinition
}

export const Skill = (props:SkillPropsType) => {
    return(
        <div className={s.skill}>
            { props.icon &&
                <div className={s.icon}>
                    <FontAwesomeIcon icon={props.icon} />
                </div>
            }
            <h3 className={s.mailTitle}>{props.title}</h3>
            <span className={s.description}>
                {props.context}
            </span>
        </div>


        // <div className={s.container}>
        //     <div className={s.photo}>
        //     </div>
        //     <h3>{props.title}</h3>
        //     <div className={s.description}>
        //            <p>React is teh best library</p>
        //     </div>
        // </div>
    )
}