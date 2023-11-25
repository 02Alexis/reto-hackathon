import CardPerfil from "../CardPerfil/CardPerfil";
import CardPost from "../CardPost/CardPost";
import CreatePost from "../CreatePost/CreatePost";
import Friends from "../Friends/Friends";
import Header from "../Header/Header";
import './StylesHome.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__Container">
        <CardPerfil />
        <div>
          <CreatePost />
          <CardPost />
        </div>
        <Friends/>
      </div>
    </div>
  );
};

export default Home;
