import react,{useState} from 'react';

function  Registrarlibro() {
   
    
 const [datos,setDatos]=useState({ 
   autor:"", 
   codigl:"",
  
   
   

});



const handleInputChange = (event )=>{
console.log(event.target.value); 

setDatos({
...datos,
[event.target.name]:event.target.value
});
}

    return(
       <>
       <div className=" Adminpanel">
           <h1 id="binvenidadmin"> registrar libro </h1> 
           <h3 className='libros'> libro</h3>
           <input placeholder=" nombre del libro" 
            className="form-control1"
             type="text" name="libro" id= "numero8"
              onChange={handleInputChange}>
                </input>
                
            
                <div class="numero101">
            <input placeholder=" autor" 
            className="form-control1"
             type="text" name="autor" id= "numero9"
              onChange={handleInputChange}>
                </input>
                </div>
                <div class=" numero111">
            <input placeholder=" codigo  libro" 
            className="form-control1"
             type="text" name="codigl" id= "numero10"
              onChange={handleInputChange}>
                </input>
                <a  id="continuar" href="/voz">volver  </a>
                <button id ="aceptar"className='btn12 btn-primary' onClick={()=>alert(" esta siendo registrado...")}> aceptar</button>
                <h1  id="imprimir"> {datos.libro} : {datos.codigl} : {datos.autor}</h1>
           </div>
           </div>
          
           
           </>
   
           
   
    );
         
       }
     
     export default Registrarlibro;