import { Link } from 'react-router-dom'
import './StylesRegister.scss'
import SesionRedes from '../SesionRedes/SesionRedes'

const Register = () => {
    return (
        <div className="registerContainer">
            <img className='registerContainer__img' src="https://redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="" />
            <form className="registerContainer__form" >
                <h2 className="registerContainer__form--title">Registrarse</h2>
                <label className="registerContainer__form--label" htmlFor="email">
                    Nombres
                </label>
                <input
                    type="text"
                    className="registerContainer__form--input"
                    required
                />
                <label className="registerContainer__form--label" htmlFor="email">
                    Teléfono
                </label>
                <input
                    type="cellphone"
                    className="registerContainer__form--input"
                    required
                />
                <label className="registerContainer__form--label" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    className="registerContainer__form--input"
                    required
                />
                <label className="registerContainer__form--label" htmlFor="password">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="registerContainer__form--input"
                    required
                />
                <button type="submit" className="registerContainer__form--button">
                    Registrar
                </button>
            </form>
            <div className="registerContainer__pageLogin">
                <span>¿Ya tienes cuenta?</span>
                <Link to="/" className="registerContainer__pageLogin--link"><em>Iniciar sesión</em></Link>
            </div>
            <SesionRedes />
        </div>
    )
}

export default Register