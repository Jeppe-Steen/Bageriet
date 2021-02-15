import React, { useState, useEffect } from 'react';

import Style from './Slider.module.scss';
import Slide1 from '../../Assets/slide1.jpg';
import Slide2 from '../../Assets/slide2.jpg';
import Slide3 from '../../Assets/slide3.jpg';


export function Slider() {
    let imgArr = [
        {id: 0, image: Slide1}, 
        {id: 1, image: Slide2}, 
        {id: 2, image: Slide3},
    ];

    const [count, setCount] = useState(0);

    const handleClick = sliderIndex => () => setCount(sliderIndex);
    
    function nxt() { let next = (count < imgArr.length - 1) ? setCount(count + 1) : setCount(0); return next; };
    function pre() { let prev = (count <= 0) ? setCount(imgArr.length - 1) : setCount(count - 1); return prev; };

    let sliderTekst = [
        'Vi elsker at bage brød',
        'Kager kan vi også lave',
        'Vi kan også levere et stort udvalg'
    ];

   /*useEffect(() => {
        let timer = setInterval(nxt, 5000);
    }, [nxt]);*/

    return (
        <section className={Style.slider}>
            <img className="imageContainer" src={imgArr[count].image} alt=""/>
            <h1 className={Style.heading}>{sliderTekst[count]}</h1>
            <svg className={Style.btn} onClick={pre} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.47 111.04"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M42.53,55.46C29.15,41.62,16.35,28.16,3.27,15c-3.46-3.48-3.81-5.72-.06-9.2,8-7.4,6.14-8,13.89,0,14.53,15,29,30.12,43.65,45,3.39,3.43,3.8,5.64.18,9.29C45.41,75.71,30.18,91.67,14.84,107.51c-4.52,4.66-4.56,4.68-8.95.2-7.81-8-7.8-6.19-.27-14C17.78,81,30,68.44,42.53,55.46Z"/></g></g></svg>
            <svg className={Style.btn} onClick={nxt} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.47 111.04"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M42.53,55.46C29.15,41.62,16.35,28.16,3.27,15c-3.46-3.48-3.81-5.72-.06-9.2,8-7.4,6.14-8,13.89,0,14.53,15,29,30.12,43.65,45,3.39,3.43,3.8,5.64.18,9.29C45.41,75.71,30.18,91.67,14.84,107.51c-4.52,4.66-4.56,4.68-8.95.2-7.81-8-7.8-6.19-.27-14C17.78,81,30,68.44,42.53,55.46Z"/></g></g></svg>
            <span>
                {imgArr.map((marker, index) => {
                    return <div key={marker.id} className={Style.marker} onClick={handleClick(marker.id)}></div>
                })}
            </span> 
        </section>
    )
}