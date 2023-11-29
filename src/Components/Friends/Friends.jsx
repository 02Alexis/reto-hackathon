import "./StylesCardsFriends.scss";

import { motion } from "framer-motion";

const users = [
  {
    nombre: "Juan",
    usuario: "@juanito",
    imagen: "https://placekitten.com/200/300",
  },
  {
    nombre: "María",
    usuario: "@maria22",
    imagen: "https://placebeard.it/200x300",
  },
  {
    nombre: "Carlos",
    usuario: "@carlitos",
    imagen: "https://placecorgi.com/200/300",
  },
  {
    nombre: "Ana",
    usuario: "@anita",
    imagen: "https://placekitten.com/201/301",
  },
  {
    nombre: "Luis",
    usuario: "@luisito",
    imagen: "https://placebeard.it/201x301",
  },
  {
    nombre: "Laura",
    usuario: "@laurita",
    imagen: "https://placecorgi.com/201/301",
  },
  {
    nombre: "Pedro",
    usuario: "@pedrito",
    imagen: "https://placekitten.com/202/302",
  },
  {
    nombre: "Isabel",
    usuario: "@isabelita",
    imagen: "https://placebeard.it/202x302",
  },
  {
    nombre: "Miguel",
    usuario: "@miguelito",
    imagen: "https://placecorgi.com/203/300",
  },
  {
    nombre: "Sofía",
    usuario: "@sofi86",
    imagen: "https://placekitten.com/203/300",
  },
];

// console.log(users);
const Friends = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="cardFriends"
    >
      <div className="destacadas">
        <p>Personas Destacadas</p>
      </div>
      {users.map((user, index) => (
        <div className="cardFriends__info" key={index}>
          <div className="usuario">
            <img src={user.imagen} alt="" />
            <div className="infoUsuario">
              <span className="name">{user.nombre}</span>
              <span className="nameUsuario">{user.usuario}</span>
            </div>
          </div>
          <button>Connent</button>
        </div>
      ))}
    </motion.div>
  );
};

export default Friends;
