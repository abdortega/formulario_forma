import React, { useState,useEffect } from "react";
import '../estilos/registro.css';
import { Alert } from "bootstrap";



const Registro = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    intension: "",
    id:"",
    codigo: "",
    genero: "",
    editorial: "",
    casa: "",
    libro: "",
    codigl: "",
  }); 
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const [datos1, setDatoss] = useState({
    // Otros campos de datos
    fechaPeticion: '',
    // Otros campos de datos
  });

  useEffect(() => {
    // Función para obtener la fecha y hora actual en formato ISO
    const obtenerFechaYHoraActual = () => {
      const fechaHoraActual = new Date().toISOString().slice(0, 19);
      return fechaHoraActual;
    };

    // Actualiza el estado con la fecha y hora actual cuando el componente se monta
    setDatoss(prevDatos => ({
      ...prevDatos,
      fechaPeticion: obtenerFechaYHoraActual(),
    }));
  }, []); // El array de dependencias está vacío para que solo se ejecute una vez al montar el componente

  
  return (
    <div className="superior">
    <div className="unique">
      <div className="mostrar">
        <h1>Registro de Intenciones" </h1>
        <h2> Completar los siguientes datos...  </h2>
        
      </div> {/* seccion de registrar intensiones  */}
      <div className="imagenframe">

      </div>  {/* seccion de registrar intensiones  */}
      <hr /> 
      
        <div className="formulario-pakage"> 
      <div className="formulario">
        <div className="forma1">
          <label className="nombre">nombre </label>
          <input  type="text"  id="nombre_formulario"  name="nombre"  className="forma1"  value={datos.nombre}
            onChange={handleInputChange}
          />
          <div className="forma3">
          <label className="label_id">apellido </label>
          <input type="text" id="id" name="id" className="forma2" value={datos.id}
            onChange={handleInputChange}
          />
        </div> {/* */}
       
        <div className="forma2">
  <label className="label_intension">¿QUÉ TIPO DE INTENCIÓN DESEA REALIZAR?</label>
  
  <div>
    <input 
      type="radio" 
      id="bautizos" 
      name="intension" 
      value="bautizos" 
      checked={datos.intension === "bautizos"} 
      onChange={handleInputChange}
    />
    <label htmlFor="bautizos">Bautizos</label>
  </div>
  
  <div>
    <input 
      type="radio" 
      id="confirmacion" 
      name="intension" 
      value="confirmacion" 
      checked={datos.intension === "confirmacion"} 
      onChange={handleInputChange}
    />
    <label htmlFor="confirmacion">Confirmación</label>
  </div>
  
  <div>
    <input 
      type="radio" 
      id="misa" 
      name="intension" 
      value="misa" 
      checked={datos.intension === "misa"} 
      onChange={handleInputChange}
    />
    <label htmlFor="misa">Misa</label>
  </div>

  {/* Agrega más opciones según sea necesario */}
</div>

        </div>
        <div className="fecha">
        <label htmlFor="">Día en el que se hace la petición</label>
        <input
          type="text"
          id="fechaPeticion"
          name="fechaPeticion"
          className="form-control"
          value={datos1.fechaPeticion}
          onChange={handleInputChange}
        />
          
        </div> {/*   end  fecha  */}
        <div className="campo genero">
  <label htmlFor="genero">adjuntar comprobante de pago:</label>
  <input
    type="file"
    id="genero"
    name="genero"
    className="form-control"
    onChange={handleInputChange}
  />
</div> {/* campo  genera */}

        {/* ... other fields ... */}
        <hr />
        <h3> Registrando</h3>
      </div>
      <div className="show2">
        <h4>Su nombre es : {datos.nombre}</h4>
        <h4> documento de identidad : {datos.id}</h4>
        <h4>intesion: {datos.intension}</h4>
        <h4>  fecha  de registro  : {datos1.fechaPeticion}</h4>
        <h4> captura del comprobante  : {datos.genero}</h4>
      </div>
      <div className=" informacion_w">
     <h2 className="parrafo_final1"> se debe verificar la informacion por parte de la secretaria </h2>
     <button className="aceptar1" onClick={()=>alert("procesando....")}> Enviar
</button>

     </div>
     <hr  className="puro"/>
     </div>
     
    
    </div>
    </div> 
    
     
  
  );
};

export default Registro;