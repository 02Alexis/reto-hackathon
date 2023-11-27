import SesionRedes from '../SesionRedes/SesionRedes';
import './StylesLogin.scss'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../../Routes/AppRouter";
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { postData } from '../../services/postData';



const Login = () => {

  const { setUsuario, setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = async (formData) => {
    console.log(formData)
    try {

      const response = await postData('login', formData);

      if (response && response.token) {

        setUsuario(formData);
        setToken(response.token)
        localStorage.setItem("token", response.token)
        localStorage.setItem('UserPerfil', JSON.stringify(formData))


        navigate('/home');
      } else {

        Swal.fire({
          icon: 'error',
          title: 'Error de inicio de sesión',
          text: response.message || 'Error desconocido.',
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error de inicio de sesión',
        text: 'Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo nuevamente más tarde.',
      });
    }
  };



  return (
    <div className="loginContainer">
      <img className='loginContainer__img' src="https://redeamerica.org/Portals/_default/skins/2023/img/Logo.svg" alt="" />
      <form className="loginContainer__form" onSubmit={handleSubmit(userLogin)} >
        <h2 className="loginContainer__form--title">Iniciar Sesión</h2>
        <label className="loginContainer__form--label">
          Email
        </label>
        <input
          type="email"
          className="loginContainer__form--input"
          name="email"
          {...register("email", { required: true })}
        />
        <label className="loginContainer__form--label">
          Contraseña
        </label>
        <input
          type="password"
          className="loginContainer__form--input"
          name="password"
          {...register("password", { required: true })}
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