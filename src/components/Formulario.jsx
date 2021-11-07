import React, { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar =(event)=>{
        event.preventDefault()
        //validar
        console.log(edad, nombre)
    }
    return (
        <div className="container">
            <form onSubmit={validar} className="form-group">
                <input placeholder="Nombre" className="form-control mb-3" type="text" onChange={(e) =>{setNombre(e.target.value)}} />
                <input placeholder="Edad" className="form-control mb-3" type="text" onChange={(e) =>{setEdad(e.target.value)}}/>
                <input className="btn btn-info btn-cli" type="submit" />
            </form>
        </div>
    )
}
export default Formulario