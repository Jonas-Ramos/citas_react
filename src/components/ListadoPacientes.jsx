import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { pacientes && pacientes.length ? (
        
        <>
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
        
        <p className="text-lg mt-5 text-center mb-5">
          Administra tus {" "}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
        </p>

        <div className="m-3 bg-white rounded-xl shadow-md px-5 py-5">
          

          { pacientes.map( paciente => 
        <Paciente 
            paciente = { paciente }
            key={paciente.id}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
        />        
          ) }

        </div></>
      ) : (
        <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-lg mt-5 text-center mb-5">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
          </p>
        </>
      )}
        
    </div>
  )
}

export default ListadoPacientes