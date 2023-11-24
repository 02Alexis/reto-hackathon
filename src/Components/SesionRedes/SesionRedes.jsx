import './StyleSesionRedes.scss'

const SesionRedes = () => {
  return (
    <div  className='sesionRedes'>
         <div  className='sesionRedes__line'></div>
    <span  className='sesionRedes__textRedes'>O inicia sesión con</span>
    <div className='sesionRedes__redes'>
       <button className='sesionRedes__redes--button'>Instagram</button> 
       <button className='sesionRedes__redes--button'>Linkedin</button>
       <button className='sesionRedes__redes--button'>Facebook</button>
    </div>
    </div>
  )
}

export default SesionRedes