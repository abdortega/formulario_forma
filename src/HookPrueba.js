import React,{useState,useEffect} from "react";
 function HookPrueba(Registrarlibro){

    const[counter,setCounte]= useState(0);

    useEffect(() =>{
    setCounte(counter)


     }, )
     return(
         <div>
            <h1> {counter="hello worl "}</h1>
            <h2> [</h2>
          
         </div>
     );
 }
  export default HookPrueba;
