import React, { useEffect, useState } from 'react';
import { NavLink as Link, useRouteMatch } from 'react-router-dom';
import {doFetch} from '../../Helpers/Fetch';
import Style from './CategoryList.module.scss';

export function CategoryList() {

    let { url } = useRouteMatch();

    let urlPath = 'https://api.mediehuset.net/bakeonline/categories';

    const [list, setList] = useState([]);

    const fetchData = async () => {
        let res = await doFetch(urlPath);
        setList(res);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul className={Style.navList}>
            {list.items ? list.items.map((item, i) => {
                return (
                    <Link activeStyle={{fontWeight: "bold"}} key={item.id} to={`${url}/${item.id}`}><li>{item.title}</li></Link>
                )
            }) : null
            }
        </ul>
    );
}