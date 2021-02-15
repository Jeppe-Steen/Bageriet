import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { doFetch } from '../../Helpers/Fetch';
import Style from './CategoryProducts.module.scss';

export function CategoryProducts() {

    let { categoryId } = useParams();
    let { url } = useRouteMatch();

    const [categoryProducts, setCategoryProducts] = useState([]);

    const getProducts = async () => {

        let productUrl = `https://api.mediehuset.net/bakeonline/categories/${categoryId}`;
        let res = await doFetch(productUrl);
        setCategoryProducts(res);
    }

    useEffect(() => {
        getProducts();
    }, [categoryId]);



    return (
        <div className={Style.articleContainer}>
            {categoryProducts.item ? categoryProducts.item.products.map((item, i) => {
                return (
                    <article key={item.id}>
                        <div className={Style.imageContainer}>
                            <img src={item.image.fullpath} alt=""/>
                        </div>
                        <h3>{item.title.substring(0, 18) + '...'}</h3>
                        <p>{item.teaser.substring(0, 80)}</p>

                        <Link to={`${url}/${item.id}`}><button>Se mere</button></Link>
                    </article>
                )
            }) : <p>loading...</p>
        }

        </div>
    )
};