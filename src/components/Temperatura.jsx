import React,{useState} from "react";

 const Temperatura = ()=>{
     const [temperatura, setTemperatura] = useState(19)
     const Subir =()=>{
         setTemperatura(temperatura + 1)
     }
     const Bajar = ()=>{
         setTemperatura(temperatura - 1)
     }
     return(
         <div>
             <h2>La Temperatura es: {temperatura}</h2>
             <p>
                 {temperatura > 21 ? 'Calor': 'Freso'}
             </p>
             <button className="btn btn-success" onClick={Subir}> Aumentar</button>
             <button onClick={Bajar}>Reducir </button>
         </div>
     )
 }
 export default Temperatura