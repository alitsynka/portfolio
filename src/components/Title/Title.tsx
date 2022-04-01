import React from "react";
import s from './Title.module.scss'

type PropsTitle = {
    title:string
}

export const Title = (props:PropsTitle) => {
    return(
        <div className={s.Header}>
            <h2 className={s.Work}>{props.title}</h2>
        </div>
    )
}