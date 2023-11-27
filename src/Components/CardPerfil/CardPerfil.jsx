import { useContext, useEffect, useState } from "react";
import "./StylesCardProfile.scss";
import { motion } from "framer-motion";
import { AppContext } from "../../Routes/AppRouter";
import { getData } from "../../services/getData";

const CardPerfil = () => {

  const [user, setUser] = useState([]);
  const {token, usuario, setToken} = useContext(AppContext);


   
    useEffect(() => {
      const getInfoUserLocalStorage = JSON.parse(localStorage.getItem('UserPerfil'));
      console.log(typeof(getInfoUserLocalStorage));
      const tokenToLocal = localStorage.getItem('token')
        getData(`user/email/${getInfoUserLocalStorage.email}`, tokenToLocal)
            .then((response) => {
                if (!user.length) {
                    setUser(response);
                    // localStorage.setItem('UserPerfil', JSON.stringify(response))
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    
    // console.log(getInfoUserLocalStorage);
    console.log(user);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="cardPerfil"
    >
      <figure>
        <img
          src={user.image}
          alt=""
        />
      </figure>

      <div className="cardPerfil__name">
        <span className="name">{user.name}</span>
        <span className="role">{user.role}</span>
      </div>
      <div className="cardPerfil__info">
        <div>
          <span className="number">{Math.floor(Math.random() * 500)}</span>
          <span className="views">Connections</span>
        </div>
        <div>
          <span className="number">{Math.floor(Math.random() * 500)}</span>
          <span className="views">Views</span>
        </div>
      </div>
      <button>View my profile</button>
    </motion.div>
  );
};

export default CardPerfil;
