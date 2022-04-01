import React from "react";
import s from './Main.module.scss';
import styleContainer from '../common/Container.module.scss'
import myPhoto from '../assets/images/photo_2022-03-31_15-03-55.jpg'
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Tilt from 'react-tilt'
import Particles from "react-tsparticles";
// import tsParticles from "tsparticles";



const particlesOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
    // fpsLimit: 60,
    // particles: {
    //     color: {
    //         value: "#000"
    //     },
    //     links: {
    //         enable: true,
    //         color: "#000",
    //         distance: 150
    //     },
    //     move: {
    //         enable: true
    //     }
    // }
}


export const Main = () => {
    return (
        <div className={s.Main} id={'main'}>
            <Particles className={s.particles} params={{
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#1e1c1c"
                    },
                    links: {
                        enable: true,
                        color: "#c7c4c4",
                        distance: 150
                    },
                    move: {
                        enable: true
                    }
                },
                backgroundMode: false,
            }} />

            <div className={styleContainer.container}>
                <Fade left>
                <div className={s.greetingContainer}>
                        <h5 className={s.greeting}>hello,my name is</h5>
                        <h1 className={s.fullName}>Alina <br/> Strok</h1>
                    <ReactTypingEffect className={s.body}
                                       text={["I'm a Freelance Front-end Developer based in Minsk,BY"]}/>
                    {/*<h3 className={s.body}>I'm a Freelance Front end Developer based in Minsk,BY</h3>*/}

                </div>
                </Fade>

                    <Fade right>
                    <Tilt className={s.tilt} options={{ max : 25 }}  >
                        <img src={myPhoto} className={s.photo} alt={"myPicture"}/>
                    </Tilt>
                </Fade>
            </div>
        </div>
    )
}