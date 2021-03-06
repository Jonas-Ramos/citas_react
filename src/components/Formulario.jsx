import {useState, useEffect} from 'react';
import Error from './Error';


const Formulario = ({ pacientes,  setPacientes, paciente, setPaciente }) => {
  const [ nombre, setNombre ] = useState("");
  const [ propietario, setPropietario ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ fecha, setFecha ] = useState("");
  const [ sintomas, setSintomas ] = useState("");
  const [ error, setError ] = useState(false)

  useEffect(() => {
      if (Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      } 
  },[paciente])

  
  
  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      console.log('Todos los campos son necesarios')
      setError(true);
      return;
    } 
    setError(false)

    //OBJETO DE PACIENTE
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }
    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])


    }

    // console.log(objetoPaciente)




    // REINICIAR EL FORM

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    
  }
  
  
  


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-5">
          Añade Pacientes y {" "} <span className="text-indigo-600 font-bold ">Adminístralos</span>
        </p>
        <form 
        
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-5 px-5 mb-10">
          { error && <Error>
          <p>Todos los campos son obligatorios</p>
          </Error>
          }
          <div className="mb-5">
              <label htmlFor="mascota" 
              className="block text-gray-700 uppercase font-bold">
                Nombre Mascota
              </label>
              <input 
                type="text"
                id="mascota"
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-500 rounder-md"
                value={nombre}
                onChange = { (e)=> setNombre(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label htmlFor="propietario" 
              className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
              </label>
              <input 
                  type="text"
                  id="propietario"
                  placeholder="Nombre del propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-indigo-500 rounder-md"
                  value={propietario}
                  onChange = { (e)=> setPropietario(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label htmlFor="email" 
              className="block text-gray-700 uppercase font-bold">
                Email
              </label>
              <input 
                  type="text"
                  id="email"
                  placeholder="Email Contacto Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-indigo-500 rounder-md"
                  value={email}
                onChange = { (e)=> setEmail(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="alta" 
              className="block text-gray-700 uppercase font-bold">
                Alta
              </label>
              <input 
                  id="alta"
                  type="date"
                  className="border-2 w-full p-2 mt-2" 
                  value={fecha}
                onChange = { (e)=> setFecha(e.target.value)}
              />
          </div>
          <div className="mb-5">
              <label htmlFor="sintomas" 
              className="block text-gray-700 uppercase font-bold">
                Síntomas
              </label>
              <textarea 
                id="sintomas"
                placeholder="Describe los síntomas"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-500 rounder-md"
                value={sintomas}
                onChange = { (e)=> setSintomas(e.target.value)}
                
                />
                <input 
                  type="submit"
                  className="bg-indigo-600 p-3 rounded-md w-full text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                  value={ paciente.id? 'Editar Paciente': 'Agregar Paciente'}
                />
              
          </div>
        </form>
    </div>
  )
}

export default Formulario