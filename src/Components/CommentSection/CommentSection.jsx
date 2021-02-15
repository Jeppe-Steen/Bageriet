import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {fetch2 } from '../../Helpers/Fetch';

import Style from './CommentSection.module.scss';

export function CommentSection(props) {

    let {productId} = useParams();
    const {register, handleSubmit, errors} = useForm();

    let loginData = props.loginData;
    let setLoginData = props.setLoginData;

    const [comments, setComments] = useState([]);

    //her bruger jeg min anden fetch funktion for at hente en liste af kommentarerne
    const getComments = async () => {
        let key = loginData.access_token;
        let url = `https://api.mediehuset.net/bakeonline/comments/${productId}`;
        let res = await fetch2(url, key);
        setComments(res)
    } 

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
            if(loginData.username) {
                getComments();
            }
        }

    }, []);

    const convertTime = (stamp) => {
        let convertedTime = new Date(stamp * 1000).toLocaleDateString('da-DK');
        return convertedTime;
    }


    const onSubmit = (data, e) => postComment(data, e);

    //her bruger jeg den samme funktion som sidst, for at poste en kommentar
    const postComment = async (data, e) => {
        e.target.reset();

        let key = loginData.access_token;
        let url = `https://api.mediehuset.net/bakeonline/comments`;
            let formData = new URLSearchParams();
            formData.append('title', data.title);
            formData.append('comment', data.comment);
            formData.append('user_id', loginData.user_id);
            formData.append('product_id', productId);
            formData.append('active', 'true');


        let res = await fetch2(url, key, 'POST', formData);
        getComments();
    }

    //her bruger jeg den samme funktion til at slette en kommentar
    const deleteComment = async (commentId) => {
        let key = loginData.access_token;
        let url = `https://api.mediehuset.net/bakeonline/comments/${commentId}`;
        let res = await fetch2(url, key, 'DELETE');
        getComments();
    };

    return (
        <section className={Style.commentSection}>
            <header>
                <h2>Kommentar</h2>
            </header>
            
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" placeholder='Skriv din titel her' ref={register({required: true})}/>   
                <input type="text" name="comment" placeholder='skriv din kommentar her' ref={register({required: true})} />
                <button>Slå op</button>   
            </form>

            <div>
                {comments.items && comments.items.slice(0).reverse().map((item, i) => {
                    return (
                        <article key={item.id}>
                            <p>{item.title}</p>
                            <p>{'af: ' + item.user.firstname + ' ' + item.user.lastname}</p>
                            <p>{convertTime(item.created)}</p>
                            <p>{item.comment}</p>
                            {item.user.username === loginData.username ? <button onClick={() => {deleteComment(item.id)}}>Slet kommentar</button> : null}
                        </article>
                    )
                })}
            </div>
        </section>
    )
}