
import { CgHeart } from "react-icons/cg";
import { GoComment } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import './StylesPostCard.scss';
import { useContext, useEffect, useState } from "react";
import { getData } from "../../services/getData";
import { AppContext } from "../../Routes/AppRouter";



const CardPost = () => {

    const [post, setPost] = useState([]);
    const { token } = useContext(AppContext);
    console.log(token)

    // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3MDEwNTk5NTAsImV4cCI6MjQ0OTUyNjMyOTIwODE2MH0.ONUEKtfDVsgGu58gMyctP60EPM0lTeHKXTsnuN_NJQs';


    useEffect(() => {
        // const getInfoUserLocalStorage = JSON.parse(localStorage.getItem('UserPerfil'));
        // console.log(typeof (getInfoUserLocalStorage));
        const tokenToLocal = localStorage.getItem('token')
        getData('publication', tokenToLocal)
            .then((response) => {
                if (!post.length) {
                    setPost(response);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function getRandomHour() {
        // Genera un número aleatorio entre 0 y 23 para las horas
        const randomHour = Math.floor(Math.random() * 24);

        // Genera un número aleatorio entre 0 y 59 para los minutos
        const randomMinute = Math.floor(Math.random() * 60);

        // Formatea las horas y minutos con dos dígitos cada uno
        const formattedHour = String(randomHour).padStart(2, '0');
        const formattedMinute = String(randomMinute).padStart(2, '0');

        // Devuelve la hora en formato HH:mm
        return `${formattedHour}:${formattedMinute}`;
    }

    // console.log(typeof (post[0].file));
    console.log(post)

    const postOrder = [...post].reverse();

    return (
        <div className="post">
            {/* <div className="pdf">
                <object data={pdfUrl} type="application/pdf"></object>
            </div> */}


            {
                postOrder?.map((user, index) => (
                    <div className="post__container" key={index}>
                        <div className="person">
                            <div className="nameUser">
                                <img src={user.user.image} alt={user.nombre} />
                                <div className="User">
                                    <span className="name">{user.user.name}     {user.user.lastName}</span>
                                    <span className="usuario">{user.user.role}</span>
                                </div>
                            </div>
                            <span className="time">{getRandomHour()} Horas</span>
                        </div>
                        <div className="infoPublicacion">
                            <p>{user.content}</p>
                            <div className="containerImages">

                                {user.file?.endsWith('.pdf') ? (
                                    <div className="pdf">
                                        <object data={user.file} type="application/pdf"></object>
                                    </div>
                                ) : (<img className="imageIzquierda" src={user.file} alt="" />)}

                                {/* <div className="imageDerecha">
                                    <img src={user.imagen} alt="" />
                                    <img src={user.imagen} alt="" />
                                </div> */}
                            </div>
                        </div>
                        <div className="iconos">
                            <div className="contenido">
                                <CgHeart className="corazon" />
                                <span>16</span>
                            </div>
                            <div className="contenido">
                                <GoComment className="comenandsocial" />
                                <span>8</span>
                            </div>
                            <div className="contenido">
                                <IoShareSocialOutline className="comenandsocial" />
                                <span>5</span>
                            </div>
                        </div>
                        <div className="comment">
                            <img src={user.user.image} alt="" />
                            <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                                <div className="userComment">
                                    <span style={{ fontWeight: '700' }}>{user.user.name}</span>
                                    <span>2 min</span>
                                </div>
                                <p>{user.comments[index]?.content}</p>
                            </div>
                        </div>
                        <div className="textarea">
                            <textarea name={user.nombre} id={index} placeholder="Añadir comentario..."></textarea>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default CardPost