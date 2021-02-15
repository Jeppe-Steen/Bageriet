import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doFetch } from '../../Helpers/Fetch';
import { CommentSection } from '../CommentSection/CommentSection';

import Style from './ProductDetails.module.scss'

export function ProductDetails(props) {

    let { productId } = useParams();
    let loginData = props.loginData;
    let setLoginData = props.setLoginData;
    
    const [details, setDetails] = useState([]);

    const getData = async () => {
        let url = `https://api.mediehuset.net/bakeonline/products/${productId}`;
        let res = await doFetch(url);
        setDetails(res);
    };

    useEffect(() => {
        getData();
    }, [productId]);

    return details.item ? (
        <div className={Style.DetailsContainer}>
            <h2>{details.item.title}</h2>
            <p>{details.item.teaser}</p>

            {loginData.username ? <CommentSection loginData={props.loginData} setLoginData={props.setLoginData} /> : null}
        </div>
    ) : <p>Indlæser siden</p>
} 