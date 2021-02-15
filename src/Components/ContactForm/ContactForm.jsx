import React from 'react';
import { useForm } from "react-hook-form";
import Style from './ContactForm.module.scss';

export function ContactForm() {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className={Style.contactForm} action="" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" type="text" placeholder="Dit navn..." ref={register({required: true})}/>
            {errors.name && <span>Indtast dit navn</span>}
            <input name="email" type="email" placeholder="Din Email..." ref={register({required: true})}/>
            {errors.email && <span>Indtast din email</span> }
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Din besked..." ref={register({required: true})}></textarea>
            {errors.message && <span>Indtast en besked</span>}
            <button>Send mail</button>
        </form>
    )
}