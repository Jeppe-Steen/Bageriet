import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { doFetch } from '../../Helpers/Fetch';

export function Login(props) {

    const [message, setMessage] = useState('indtast login oplysninger');

    let loginData = props.loginData;
    let setLoginData = props.setLoginData;

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => getLogin(data, e);

    const getLogin = async (data, e) => {
        e.target.reset();

        let formData = new URLSearchParams();
        formData.append('username', data.username)
        formData.append('password', data.password)

        let url = 'https://api.mediehuset.net/token';
        let res = await doFetch(url , 'POST', formData);

        handleSessionData(res);
    };

    const handleSessionData = (res) => {
        if (!res.message){
            setLoginData(res);
            sessionStorage.setItem('token', JSON.stringify(res));
            setMessage('du er nu logget ind');
        }

        if (res.message === 'No authorization') {
            setMessage('Forkert username eller password')
        }
    }

    const logOut = () => {
        setLoginData([]);
        sessionStorage.removeItem('token');
        setMessage('Du er nu logget ud');

        let timer = setTimeout(() => {
            setMessage('Indtast login oplysninger');
            clearTimeout(timer)
        }, 2000);
    };

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')));
        }

    }, []);


    return (
        <section>
            <h4>{loginData.username ? `Du er nu logget ind som ${loginData.username}` : message}</h4>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <b>login</b>
                <label>username</label>
                <input type="text" name="username" placeholder="indtast dit navn" ref={register({required: true})}/>
                    {errors.username && <span>Mangler username</span>}

                <label>password</label>
                <input type="password" name="password" placeholder="Indtast dit password" ref={register({required: true})}/>
                    {errors.password && <span>Mangler password</span>}

                {!loginData.username ? <button>Login</button> : <button onClick={logOut}>Log out</button>}
            </form>
        </section>
    )
}