import React from 'react';
import '../estilos/tramites.css';
import  Maria_madre from"../imagenes_tramite/maria_madre.png"



const mostrarMensaje = (mensaje) => {
  alert(mensaje); // Muestra un mensaje de alerta con el texto proporcionado
};
 function Tramites () {
  
       return(
        <>
    <div className='wraper_total'>
    <img   className="maria_madre" src={Maria_madre} alt="Maria Madre" />
    <div className="mi-componente">
    <h1 className='inside'> Parroquia Maria madre de dios</h1>
    </div>
    
      </div>
      <div className='part1'>
            <p>
            Los sacramentos, arraigados en la tradición cristiana, son rituales sagrados que sirven como 
            signos efectivos de la gracia divina. Este concepto es especialmente significativo en la Iglesia Católica y
             en algunas denominaciones protestantes. Los sacramentos se consideran actos rituales que facilitan la comunicación
              de la gracia de Dios a los creyentes. La cantidad y
             la naturaleza específica de estos sacramentos pueden variar entre las diferentes tradiciones cristianas.
            </p>
        </div>
      <div className='part2'>
        <h6> bautizos</h6>
        <p> Bautismo: Introduce a la persona en la comunidad cristiana</p>
        
      </div>
      <div className='part3'>
        <h6> confirmacion </h6>
        <p> Fortalece el Bautismo</p>
        
      </div>
      <div className='part4'>
        <h7>   </h7>
        
      </div>
      <div className='part5'>
        <h6> bautizos</h6>
        
      </div>
      <div className='part6'>
        <h6> confirmacion </h6>
        
      </div>
      <div className='part7'>
        <h7> parte 7</h7>
        
      </div>
      <div className='part8'>
        <h7>  parte 8</h7>
        
      </div>
      <div className='part9'>
        <h1> hello world</h1>
        
      </div>

      </> 
 );
  
};

export default Tramites;