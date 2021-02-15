import react, { useEffect, useState } from 'react';
import { doFetch } from '../../Helpers/Fetch';
import Style from './Newsletter.module.scss'

export function Newsletter() {

    const [mail, setMail] = useState();
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        let timer = setTimeout(() => {
            setFeedback('');
        }, 5000);
        return (() => clearTimeout(timer));
    }, [feedback])

    const sendMail = async (e) => {

        e.preventDefault();
        let url = 'https://api.mediehuset.net/bakeonline/newsletter';
        let formData = new URLSearchParams();
        formData.append('email', mail);
        let res = await doFetch(url, 'POST', formData);

        if (res.error !== '') {
            setFeedback('der er sket en fejl')
        } else {
            setFeedback('Du er nu tilmeldt')
        }
    }

    let loremText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ipsa unde est quod voluptatum voluptatem, repellat consectetur odit dolores non quidem laborum corporis voluptates eligendi in. Fuga repellendus earum architecto.';

    return (
        <section className={Style.newsletterSection}>
            <article>
                <h2>Tilmeld dig vores nyhedsbrev</h2>
                <p>{loremText.substring(0, 100)}</p>
                <form onSubmit={(e) => {sendMail(e)}}>
                    <div className={Style.newsletterSvg}></div>
                    <input placeholder="Indtast Email her.." type="text" value={mail} onChange={(e) => {setMail(e.target.value)}}/>
                    <button>tilmeld</button>
                </form>
                <p>{feedback}</p>
            </article>
        </section>
    )
}