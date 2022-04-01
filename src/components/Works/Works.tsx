import React from "react";
import s from './Works.module.scss'
import {Work} from "./Work/Work";
import {Title} from "../Title/Title";
import socialImage from "../../components/assets/images/photo-1603458319957-8df73cb52511.jpg.jpg"
import todoListApp from "../../components/assets/images/photo-1558025137-0b406e9cc169.jpg.jpg"
import teamApp from "../../../src/components/assets/images/photo-1511376777868-611b54f68947.jpg.jpg"
import calcApp from "../../components/assets/images/photo-1568502702280-348cf12c6d2c.jpg.jpg"

export const Works = () => {

    const decr1 = 'Social media helps people establish better relationships with their family and friends.Social networks are important because they allow people to develop relationships with others with whom they might not otherwise be able to connect.'
    const decr2 = 'One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel grounded'
    const decr3 = 'This project is being developed now by me and a team of talented creators. It will help to learn new things with the usage of cards, where, for instance, on the first side can be a word and on the other side -- a definition.'
    const decr4 = 'Conversion is the knowledge of the real value of one currency to be converted into another country\'s currency so that you can convert between the two currencies.'
    const socialNetwork = {
        backgroundImage: `url(${socialImage})`
    }

    const todoApp = {
        backgroundImage: `url(${todoListApp})`
    }

    const teamProject = {
        backgroundImage: `url(${teamApp})`
    }

    const calcProject = {
        backgroundImage: `url(${calcApp})`
    }

    return(
        <div id={'works'} className={s.Works}>
            <div className={s.container}>
                <Title title={'what i do'}/>
                <div className={s.WorksWrapper}>
                    <Work title={'Social network'} description={decr1} style={socialNetwork} href={'https://www.google.by/'}/>
                    <Work title={'To do list'} description={decr2} style={todoApp} href={'https://www.google.by/'}/>
                    <Work title={'Cards project with team'} description={decr3} style={teamProject} href={'https://www.google.by/'}/>
                    <Work title={'Currency converter'} description={decr4} style={calcProject} href={'https://www.google.by/'}/>
                </div>
            </div>
        </div>
    )
}