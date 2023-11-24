import CardPerfil from "../CardPerfil/CardPerfil"
import CardPost from "../CardPost/CardPost";
import Friends from "../Friends/Friends"
import './StylesPerfil.scss';





const Perfil = () => {


  return (
    <div className="container">
      <CardPerfil />
      <div className="container__about">
        <div className="info">
          <span>Acerca de ti</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut soluta
            assumenda dolorum itaque natus omnis laborum odit, aliquid ab, ad quos
            non, deserunt enim dolorem! Dolores totam facere porro vero. Sunt, vel
            esse. Quidem saepe libero atque voluptatum, aliquam pariatur
            repellendus commodi. Porro corrupti praesentium molestias, numquam hic
            nam ea perferendis ipsam obcaecati dolorem quo consequatur
            dignissimos. Itaque, eum voluptate. Temporibus quia quaerat voluptas
            adipisci ut autem in, reiciendis expedita vel error quod, hic minima
            ipsam blanditiis repellendus vitae. Pariatur inventore deleniti autem!
            Maiores impedit mollitia tempore quae, nisi praesentium? Temporibus
            culpa facilis, enim nemo officiis dignissimos. Enim cumque
            reprehenderit, voluptatum expedita exercitationem libero incidunt unde
            quia commodi adipisci recusandae nostrum similique, ut tempora autem
            quas natus necessitatibus animi. Quos.
          </p>

        </div>
        <CardPost />
      </div>

      <Friends />
    </div>
  );
}

export default Perfil