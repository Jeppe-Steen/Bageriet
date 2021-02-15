import React from 'react';
import { ContactForm } from '../../Components/ContactForm/ContactForm';
import Style from './ContactPage.module.scss';

export function ContactPage() {

    return (
        <main className={Style.pageContainer}>
            <header>
                <h1>Kontakt os</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quos nemo voluptates eveniet odio, voluptatem cupiditate architecto id molestias, eius, minima aut reprehenderit sit consequatur deleniti aperiam corrupti error! Ex.</p>
            </header>

            <section>
                <ContactForm />
                <article>
                    <span><h4>Adresse:</h4><p>Øster uttrupvej 1 9200 Aalborg </p></span>
                    <span><h4>Telefon:</h4><p>+45 88 88 88</p></span>
                </article>
            </section>
        </main>
    )
} 