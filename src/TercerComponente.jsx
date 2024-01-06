import { useState } from "react";

 const   TercerComponente=()=>{
    var lent = "libro  registrado";
     var agua =" best seller";
     const [datos,setDatos]=useState({
      nombrelibro:"",
      autor:"",
     codigo: "",
     genero:"",
     editorial:"",
     casa:"",
     libro:"",
      
     codigl:"",
    
     
     

});

         
return(
      <div class ="unique">
    <div class="mostrar">
       
                <h1>  Donaciones  </h1>
                <h2>  gracias por traer un libro </h2>
               <hr></hr>
               </div>
               <a id="aceptar1" href="/voz">aceptar </a>
            <div class="clasenombre">
          
        <input placeholder= "titulo del libro " 
         className="form-control1"  name= "nombrelibro"  id='numero1'
         type="text"  >
            </input> 
             </div>
             <div class=" numero2">
            <input placeholder=" digitar el autor " 
            className="form-control1"
             type="text" name="autor" id= "numero2">
                </input>
                </div>
           <hr></hr>
              
             <div class="numero_empleado"> 
        <input placeholder=" ingrese el codigo de libro "
         className="form-control1" name ="codigo"  id='numero1'
         type="text" >
            </input> 
            <div class="numero_empleado"> 
        <input placeholder=" genero  "
         className="form-control1" name ="genero"  id='numero2'
         type="text" >
            </input> 
            </div>
              <div class="numero_empleado"> 
        <input placeholder=" la editorial "
         className="form-control1" name ="editorial"  id='numero2'
         type="text" >
            </input> 
            </div>
            <div class="numero_empleado"> 
        <input placeholder=" año de publicacion  "
         className="form-control1" name ="empleado"  id='numero2'
         type="text" >
            </input> 
            </div>
            
            
            <div class="numero_empleado"> 
        <input placeholder=" ciudad  "
         className="form-control1" name ="empleado"  id='numero3'
         type="text" >
            </input> 
            </div>
            <div class="numero_empleado"> 
        <input placeholder=" edicion "
         className="form-control1" name ="empleado"  id='numero4'
         type="text" >
          </input>
          </div>
            <hr></hr> 
            
            </div>
            <div class="show2">
          <h4> su libro es  :-{lent } </h4>
           <h5 >  el autor es   {agua} </h5>
        </div>
        <div> </div>
        </div>

);


 }
  export default TercerComponente;