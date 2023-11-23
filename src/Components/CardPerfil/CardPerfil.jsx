import './StylesCardProfile.scss'
const CardPerfil = () => {
  return (
    <div className="card">

      <figure>
        <img src="https://media.istockphoto.com/id/1406197730/es/foto/retrato-de-un-joven-indio-guapo.jpg?s=612x612&w=0&k=20&c=zmBBGk9nsf8NvLXrr2wm0ML70HobYQmVDU43sHNdsYQ=" alt="" />
      </figure>

      <div className='card__name'>
        <span className='name'>Gurdeep Osahan</span>
        <span className='role'>UI / UX Designer</span>
      </div>
      <div className='card__info'>
        <div>
          <span className='number'>358</span>
          <span className='views'>Connections</span>
        </div>
        <div>
          <span className='number'>85</span>
          <span className='views'>Views</span>
        </div>
      </div>
      <button>View my profile</button>
    </div>
  )
}

export default CardPerfil