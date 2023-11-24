import CardPerfil from "../CardPerfil/CardPerfil"
import Friends from "../Friends/Friends"
import './StylesPerfil.scss'

const Perfil = () => {
  return (
    <div className="container">
      <CardPerfil/>
      <Friends/>
    </div>
  )
}

export default Perfil