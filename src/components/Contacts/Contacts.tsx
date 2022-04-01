import React, {ChangeEvent, useState} from 'react';
import s from './Contacts.module.scss';
import styleContainer from "../common/Container.module.scss"
import {Title} from "../Title/Title";
// @ts-ignore
import Fade from 'react-reveal/Fade';
import axios from "axios";


export function Contacts() {

    const [name, setName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const onNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onLastNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value)
    }

    const onMessageChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }

    const getDataRequest = (name: string,lastName: string,message: string) => {
        return axios.post(`http://localhost:3010/sendMessage`,{name,lastName,message})
    }

    return (
        <div id="contacts" className={s.fullBlock}>
            <div className={`${styleContainer.container} ${s.contactContainer}`}>
                <div>
                    <Title title={"Contact me"}/>
                </div>
                <Fade right>
                    <form className={s.form} onSubmit={event => {
                        event.preventDefault()
                        getDataRequest(name,lastName,message)
                    }}>
                        <input
                            type="text"
                            placeholder={'first name'}
                            className={s.inputClass}
                            value={name}
                            onChange={onNameChanged}
                        />
                        <input
                            type="text"
                            placeholder={'last name'}
                            className={s.inputClass}
                            value={lastName}
                            onChange={onLastNameChanged}
                        />
                        <textarea
                            placeholder={'message'}
                            className={s.textareaClass}
                            value={message}
                            onChange={onMessageChanged}
                        />
                        <button className={s.button} >Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

