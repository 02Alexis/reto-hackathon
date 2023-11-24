import SesionRedes from '../SesionRedes/SesionRedes';
import './StylesLogin.scss'
import { Link } from 'react-router-dom';

const Login = () => {
 

  return (
    <div className="loginContainer">
      <img className='loginContainer__img' src="https://redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="" />
      <form className="loginContainer__form" >
        <h2 className="loginContainer__form--title">Iniciar Sesión</h2>
        <label className="loginContainer__form--label" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="loginContainer__form--input"
          required
        />
        <label className="loginContainer__form--label" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          className="loginContainer__form--input"
          required
        />
        <button type="submit" className="loginContainer__form--button">
          Iniciar sesión
        </button>
      </form>
      <div className="loginContainer__pageRegister">
        <span>¿No tienes cuenta?</span>
        <Link to="/registro" className="loginContainer__pageRegister--link"><em>Registrarse</em></Link>
      </div>
      <SesionRedes />
    </div>
  );
};

export default Login