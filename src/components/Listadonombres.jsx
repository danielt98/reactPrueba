import React,{useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {
    const [nombre,setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id,setId] = useState('')

    const addNombre = (event)=>{
        event.preventDefault()
        const nuevoNombre = {
            id: uniqid(),
            name: nombre
        }
        setListaNombres([...listaNombres,nuevoNombre])
        setNombre('')
    }
    const deleteName = (id)=>{
        const array = listaNombres.filter(item => item.id !== id)
        setListaNombres(array)
    }
    const edit = (item)=>{
        setModoEdicion(true)
        setNombre(item.name)
        setId(item.id)
    }
    const editName = (event)=>{
        event.preventDefault()
        const nuevoArray = listaNombres.map(item => item.id === id ? {id:item.id, name:nombre}:item)
        setListaNombres(nuevoArray)
        setNombre('')
        setModoEdicion(false)
    }
    return (
        <div className="row">
            <div className="col">
                <h2>Nombres</h2>
                <ul className="list group">
                    {
                        listaNombres.map(item=>
                            <li key={item.id} className="list-group-item">{item.name}
                                <button onClick={()=>{deleteName(item.id)}} className="btn btn-danger float-right">Borrar</button>
                                <button onClick={()=>{edit(item)}} className="btn btn-info float-right">Editar</button>
                            </li>
                            
                        )
                    }
                </ul>
            </div>
            <div className="col">
                <h2>Formulario</h2>
                <form onSubmit={(e)=>modoEdicion ? editName(e) : addNombre(e)} className="form-group">
                    <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} className="form-control" type="text" placeholder="Nombre" />
                    <input className="btn btn-info btn-block form-control" type="submit" value={modoEdicion ? 'Editar' : 'Registrar'}/>
                </form>
            </div>
        </div>
    )
}
export default Listadonombres
