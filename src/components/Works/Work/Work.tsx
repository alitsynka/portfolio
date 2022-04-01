import React, {CSSProperties} from "react";
import s from './Work.module.scss'

type WorkPropsType = {
    title:string
    description:string
    style: CSSProperties | undefined
    href:string
}

export const Work = (props:WorkPropsType) => {
    return(
        <div className={s.Work}>
            <div className={s.imageReact} style={props.style}>
                <a className={s.viewButton} href={props.href} target={'_blank'}>more details</a>
            </div>
            <div className={s.description}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}