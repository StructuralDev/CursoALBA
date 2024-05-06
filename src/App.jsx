import './App.css'

const Formulario = (props) => {
  return(
    <div className='datos'>
        <label>
          {props.name}
        </label>
        <input type={props.type} placeholder={props.pholder}/>
    </div>
  )
}

const TextArea = () => {
  return(
    <div className='datos'>
      <label>¿Cuál es tu duda?</label>
      <textarea cols='30' rows='5'></textarea>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <form action="https://tenor.com/es/view/rick-roll-rick-ashley-never-gonna-give-you-up-gif-22113173" method="post">
        <Formulario name='Nombre:' type='text' pholder='Escribe tu nombre' />
        <Formulario name='Correo:' type='email' pholder='Escribe tu correo' />
        <Formulario name='Móvil:' type='tel' pholder='Escribe tu número móvil' />
        <TextArea />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}





export default App
