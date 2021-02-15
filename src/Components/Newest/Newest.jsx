import React, { useState, useEffect } from 'react';

import Style from './Newest.module.scss';
import { doFetch } from '../../Helpers/Fetch';

export function Newest() {

    let url = 'https://api.mediehuset.net/bakeonline/products';
    const [bakes, setBakes] = useState([]);

    const getBakes = async () => {
        let res = await doFetch(url)
        setBakes(res);
    }

    useEffect(() => {
        getBakes();
    }, []);

    let loremTekst = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, quisquam repellat assumenda illum quo itaque est mollitia temporibus, doloremque accusamus cum! Ratione pariatur voluptatem id ut excepturi qui harum in.';


    return (
        <section className={Style.newestSection}>
            <header>
                <h2>Nyeste bagværk</h2>
                <p>{loremTekst.substring(0, 100)}</p>
            </header>
            <div>
                { bakes.items && bakes.items.map((item, i) => {
                    if(i < 8) {
                        return (
                            <article key={item.id}>
                                <div className={Style.imageContainer}>
                                    <img src={item.image.fullpath} alt=""/>
                                </div>
                                <h3>{item.title.substring(0, 18) + '...'}</h3>
                                <p>{item.teaser.substring(0, 80)}</p>

                                <button>Se mere</button>
                            </article>
                        )
                    } else {
                        return null;
                    }
                })
                }
            </div>
        </section>
    )
}