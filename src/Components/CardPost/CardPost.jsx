
import { CgHeart } from "react-icons/cg";
import { GoComment } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import './StylesPostCard.scss';
const CardPost = () => {
    const info = [
        {
            nombre: "Juan",
            usuario: "@juanito",
            imagen: "https://placekitten.com/200/300",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'
        },
        {
            nombre: "María",
            usuario: "@maria22",
            imagen: "https://placebeard.it/200x300",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'
        },
        {
            nombre: "Carlos",
            usuario: "@carlitos",
            imagen: "https://placecorgi.com/200/300",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Ana",
            usuario: "@anita",
            imagen: "https://placekitten.com/201/301",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Luis",
            usuario: "@luisito",
            imagen: "https://placebeard.it/201x301",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Laura",
            usuario: "@laurita",
            imagen: "https://placecorgi.com/201/301",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Pedro",
            usuario: "@pedrito",
            imagen: "https://placekitten.com/202/302",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Isabel",
            usuario: "@isabelita",
            imagen: "https://placebeard.it/202x302",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Miguel",
            usuario: "@miguelito",
            imagen: "https://placecorgi.com/203/300",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
        {
            nombre: "Sofía",
            usuario: "@sofi86",
            imagen: "https://placekitten.com/203/300",
            post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam totam, magnam natus dicta molestiae eveniet unde dignissimos laboriosam veniam accusamus rerum maiores excepturi recusandae doloremque obcaecati sed quidem voluptatem voluptates.'

        },
    ]
    return (
        <div className="post">
            {
                info.map((user, index) => (
                    <div className="post__container" key={index}>
                        <div className="person">
                            <div className="nameUser">
                                <img src={user.imagen} alt={user.nombre} />
                                <div className="User">
                                    <span className="name">{user.nombre}</span>
                                    <span className="usuario">{user.usuario}</span>
                                </div>
                            </div>
                            <span className="time">3 Horas</span>
                        </div>
                        <div className="infoPublicacion">
                            <p>{user.post}</p>
                            <div className="containerImages">
                                <img className="imageIzquierda" src={user.imagen} alt="" />
                                <div className="imageDerecha">
                                    <img src={user.imagen} alt="" />
                                    <img src={user.imagen} alt="" />
                                </div>
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
                            <img src={user.imagen} alt="" />
                            <div>
                                <div className="userComment">
                                    <span style={{fontWeight:'700'}}>{user.nombre}</span>
                                    <span>2 min</span>
                                </div>
                                <p>{user.post}</p>
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