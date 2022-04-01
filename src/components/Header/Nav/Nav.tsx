import React from "react";
import s from './Nav.module.scss'
// @ts-ignore
import { Link, animateScroll as scroll } from "react-scroll";
// @ts-ignore
import Fade from "react-reveal/Fade";

export const Nav = () => {
    return(
        <Fade top>
        <div className={s.Nav}>
                <Link
                    activeClass={s.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Home</Link>
                <Link
                    activeClass={s.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Skills</Link>
                <Link
                    activeClass={s.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >What i do</Link>
                <Link
                    activeClass={s.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={500}
                >Contact</Link>
        </div>
        </Fade>
    )
}