import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { CategoryList } from '../../Components/CategoryList/CategoryList';
import { CategoryProducts } from '../../Components/CategoryProducts/CategoryProducts';
import { CommentSection } from '../../Components/CommentSection/CommentSection';
import { ProductDetails } from '../../Components/ProductDetails/ProductDetails';
import Style from './productPage.module.scss';

export function ProductPage(props) {

    let { url } = useRouteMatch();

    let loginData = props.loginData;
    let setLoginData = props.setLoginData;
    
    return (
        <main className={Style.productPage_main}>
            <header className={Style.pageHeader}>
                <h1>Vores elskede bagværk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, enim tempore. Voluptatum, dolor. Ratione similique ab sapiente quam vero necessitatibus aliquam quia provident, autem, harum suscipit qui itaque alias. Suscipit.</p>
            </header>

            <section className={Style.wrapper}>
                <CategoryList />

                <Switch>
                    <Route exact path={url}>
                        <Redirect to={`${url}/1`}></Redirect>
                    </Route>

                    <Route exact path={`${url}/:categoryId`} >
                        <CategoryProducts />
                    </Route>

                    <Route exaxt path={`${url}/:categoryId/:productId`} >
                        <ProductDetails loginData={props.loginData} setLoginData={props.setLoginData} />
                    </Route>
                </Switch>
            </section>
        </main>
    )
} 