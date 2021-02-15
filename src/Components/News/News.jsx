import React, { useState, useEffect } from 'react';
import { doFetch } from '../../Helpers/Fetch';
import Style from './News.module.scss';

export function News() {

    const url = 'https://api.mediehuset.net/bakeonline/news';
    const [news, setNewst] = useState([]);

    const getNews = async () => {
        let res = await doFetch(url);
        setNewst(res);
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        <section className={Style.newsSection}>
            <header>
                <h2 className={Style.newsHeading}>Vi skaber lækkert! brød</h2>
            </header>
                <p className={Style.newsTeaser}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum accusantium aspernatur nulla, omnis, illo voluptates sit recusandae porro consectetur neque iure mollitia perferendis a deserunt sequi facilis iusto, expedita optio.</p>
            <div>
                { news.items && news.items.map((item, i) => {
                    if (i < 3 ) {
                        return (
                            <article key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <h3>{item.title.substring(0, 20) + '...'}</h3>
                                <p>{item.teaser.substring(0, 70) + '...'}</p>
                            </article>
                        )
                    } else {
                        return null;
                    }
                })}
            </div>
        </section>
    )
}

