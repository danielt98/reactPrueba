import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const useEf = () => {
    const [nombre,setNombre] = useState('Pedro')
    const {id} = useParams()
    useEffect( ()=>{
        setTimeout( ()=>{
            setNombre('Mauel')
        },2000)
    });
    return (
        <div>
            <h1>Cargar contenido y parametro URL</h1>
            {nombre}
            <br />
            {id}
        </div>
    )
}
export default useEf
