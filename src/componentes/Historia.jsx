import '../estilos/historia.css';
import imagen from "../imagenes/logo.png";
import imagen_reseña1 from "../imagenes/replica.jpg"
import imagen_reseña2 from "../imagenes/imagen_reseña2.png"
import imagen_reseña3 from "../imagenes/imagen_reseña3.jpg"
 import imagen_animada from "../imagenes/imagen_animada.png"
import  ilustracion from "../imagenes/ilustracion.jpg"
import ilustracion2 from "../imagenes/ilustracion2.png"
 import ilustracion3 from "../imagenes/ilustracion3.jpg"
 import ilustracion6 from "../imagenes/ilustracion6.png"
 import ilustracion5 from "../imagenes/ilustracion5.png"
 import jdimas from "../imagenes/Jose_dimas.jpg"
 import marino  from "../imagenes/seccion5/seccion5_ilustracion1.png"
 import javier from "../imagenes/capilla.png"
 import iglesia_seccio5 from "../imagenes/seccion5/seccion_iglesia.png"
 import iglesia_seccion5 from "../imagenes/seccion5/iglesia_ seccion5.png"
 import  chavez from "../imagenes/seccion5/chavez.png" 
 import  historia from "../imagenes/seccion5/historia.png"
 import  misa from "../imagenes/seccion5/misa.png"
 import iglesiatotal from "../imagenes/seccion5/iglesiatotal.jpg"
 import  ilustracion1_seccion7 from "../imagenes/seccion5/ilustracion1_seccion7.png"
 import  ilustracion2_seccion7 from "../imagenes/seccion5/ilustracion2_seccion7.jpg"
 import  ilustracion3_seccion7 from "../imagenes/seccion5/ilustracion3_secccion7.png"
 import  ilustracion1_seccion8  from "../imagenes/ilustracion1_seccion8.png"
 import ilustracion2_seccion8 from "../imagenes/ilustracion2_seccion8.png"
 import ilustracion4_seccion8 from "../imagenes/ilustracion4_seccion8.png"
 import ilustracion3_seccion8 from "../imagenes/ilustracion3_seccion8.png"

 import React, { useEffect, useRef ,useState} from 'react';

 function  Historia () { // 
 
   const headerRef = useRef(null);
   const [showImage, setShowImage] = useState(false);
   const sectionRef = useRef(null);
   
 
   useEffect(() => {
     // Enfocar en el encabezado al cargar el componente o actualizar
     if (headerRef.current) {
       headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   }, []);
   
 
   return (
          <div className="inicial ">
       
       <header  ref={headerRef} className="App-header_historia"> 
       <img className='imagen_animada' src={imagen_animada}/>
            <h1 className='mensaje-animado '> bienvenido a la seccion de historia</h1>
       </header>
      
       <img className='logo_iglesia' src={imagen} />
       <div className='artilleri'>
       <p className='parrafo1'>En los años 1990   se encomendo a el padre  Marino  Morlin un saleciano quien 
       fue enviado a evangelizar a la comunidad  de los robles.
          Lamentablemente murio en un  accidente. en su lugar   
 fue encomendada esta  misión a el  padre  Francisco Verar quien continua la obra de el Padre Morlin.
 el padre francisco comenzó a unir a la familia  a anunciar el evangelio  y a crear comunidad 
  ya habia una capilla a partir de esta capilla  se  comenzó  el templo  actual  que el padre quiso  
  que fuera  una  reproduccion del  templo  de  medjugorge y que se llamara maria reina de la paz.
 </p>
       </div> {/*  fin  artilleri */}
       <div className='reseña'>
            <p className='parrafo_2' >
             Monseñor Jose Dimas cedeño  le sugirio  que  ya habia una parroquia 
            con este nombre  como los salecianos tienen a
             Maria Axuliadora  como patrona   un grupo  de   fieles queria  que  
             fuera  María Auxiliadora y otra parte María reina de la paz
             Monseñor Dimas  Cedeño   aconsejo a el padre paco  sobre que no
              debian  haber 2 o 3 parroquias con el mismo nombre  pasaron meses y  
            Monseñor volviO a preguntar a la comunidad si  ya estaban de acuerdo
              el padre  respondió que aun no.
            </p>
            <img className='imagen_reseña22' src={imagen_reseña2 }/>
            <img className='imagen_reseña3' src={imagen_reseña3}/>
          
       </div> {/* fin de reseña  */}
           <div className='seccion3 ' >
         <p className='parrafo3'>
        
            Es entonces cuando a monseñor jose Dimas cedeño tiene la idea de llamar a la parroquia con un nombre importanticimo para Maria que es madre de dios
         </p>
          
         <img className='imagen_reseña12' src={ilustracion}  />
         
         <img className='imagen_reseña2' src={ilustracion2 }  />
            <img className='imagen_reseña32' src={ilustracion3}/>
            {/*
          
                     */}
            
            </div>
            
            <div className='seccion4'>
                
            <img className='jdimas ' src={jdimas}/>
             <p className=' parrafo4' > 
              RAZON DE   ESTE NOMBRE : MARIA MADRE DE DIOS
 
             según  Monseñor José Dimas Cedeño Delgado.
             
             en el año  431 hubo un consenzo  en efeso  donde se reunie ron  los ovispo  para aclarar  una heregia  que los aldeanos  decian y alegaban que jesus  era  hijo de dios y la otra parte de que eran los obispos llegaron  a  el consenso  de que  maria era madre de dios  por que cristo   es hijo de dios "cristo es dios" y maria le dio la humanidad  a cristro y ella es madre de cristo  y madre de dios y hubo concilio  en ese año  y se definio maria se puede llamar maria madre de dios.
             
             </p>
               {/* parrafo  
                    */}
                  </div> {/* fin de seccion 4 */}
                  <div className='seccion5'> 
                  <p className='parrafo5'>
   <span className=' Reseña_historica'>  Reseña histórica </span>
   <span className="nombre">NOMBRE: PARROQUIA MARIA MADRE DE DIOS.</span><br />
   <span className="fecha">se fundó el día 31 de mayo de 1997.</span><br />
   <span className="anos">AÑOS A LA FECHA: 26 AÑOS.</span><br />
   <span className="tipo">PARROQUIA DIOCESANA</span><br />
   <span className="parroco">PARROCO REVERENDO WILLIAM SANCHEZ</span>
 </p>
 
 <p className='parrafo6'>iniciamos con la cuaci-
 parroquia Maria Auxiadora  acargo de el REV P Marino
  Morlin Fruscalzo(Q,D,E,P) Gestor del proyecto para
   la construcción del templo</p>
   <img className='marino' src={marino }/>
            <img className='jvier' src={misa}/>
            <img className='iglesia_seccio5' src={iglesia_seccio5}/>
            <p className='parrafo7'>EN 1993  se  coloca la primera piedra para
             la construcción de nuestra parroquia 
              a cargo del padre diocesano Francisco Javier Verar.
 
 Inmediatamente se instala  el consejo
  pastoral  y se inician las actividades pro -
  construcción del templo . toda la comunidad se aboca a trabajar y logar  
  la meta, esto se logra con  mucha oración y perseverancia.</p>
           
       
       <img className="iglesia_seccion55" src={iglesia_seccion5}/>
        
                  </div> {/* fin de seccion 5 */}
           
                  <div className="mi-seccion">
  
       <img className='chavez' src={chavez}/>
       <img className='historia_foto' src={historia}/>
       <img className='misa' src={javier}/>
 
       {/* Reemplaza "/ruta/a/tu/imagen.jpg" con la ruta real de tu imagen */}
       {/* Asegúrate de proporcionar una descripción adecuada en el atributo alt */}
       <p className='parrafo8'>Año 1996
 
 El 8 diciembre  de 1996 se hace  en honor a maria
  Auxiladora la primera eucaristica aun sin terminar 
  el templo.</p>
    
     </div>  {/* fin de seccion todo  */} 
     <div className='seccion6'>
       <p  className=' parrafo9'>
       AÑO 1997
 
 despues de varias consultas para darle nombre a nuestra parroquia el señor obismo Jose Dimas Cedeño de Forma salomonica le da 
 
 el nombre de Parroquia: SANTA MARIA MADRE DE DIOS.
 
 hasta nuestros días
 
       </p> 
       
       <img className='Iglesiatotal' src={iglesiatotal} />
     </div> {/* fin seccion 6  */} 
     <div className='seccion7'>
     <h3 id="parrocos">  Parrocos dedes su inicios hasta la actualidad</h3>
     <div class="image-text-container">
     <img  className="ilustracion1_seccion7" src={ilustracion1_seccion7} alt="Imagen 1" />
     <p id="p1"> PADREMARINO MORLIN  FRUSCALSO 1984-1992</p>
     </div> {/*  finn*/}
     <div class="image-text-container">
       <img  className="ilustracion2_seccion7" src={ilustracion2_seccion7} alt="Imagen 2" />
       <p id="p1"  PADRE FRANCISCO VERAR> 1993-1999</p>
       </div> {/*  fi7nn*/}
       <div class="image-text-container">
       <img   className="ilustracion3_seccion7" src={ilustracion3_seccion7} alt="Imagen 3" />
      <p id="p1" >EFRAIN DE LEON  1999 -2001 </p> 
      </div> {/*  fin */}
     </div> {/* fin de seccion7 */}
      <div className='seccion8'> 
      <div class="image-text-container">
      <img  className="ilustracion2_seccion8" src={ilustracion1_seccion8 } alt="Imagen 1" />
      <p id="p1"> PADRE REMIIGIO SANTANA 2001-2011</p>
      </div> {/* imagen -text - container end */ }
      <div class="image-text-container">
       <img  className="ilustracion3_seccion8" src={ilustracion2_seccion8} alt="Imagen 2" />
      <p id="p1"> PADRE SAMUEL ALVARES 2012 - 2019 </p>
      </div> {/* imagen -text - container end */ }
      <div class="image-text-container">
       <img  id="manuel" className="ilustracion4_seccion8" src={ilustracion3_seccion8} alt="Imagen 3" />
       <p  id="p1">  PADRE MANUEL MAN  HERNANDES 2019 -2022</p>
         </div>
      </div> { /* fin de seccion8 */}
         <div className='willian'>   { /* fin de seccion8 */}
         <img   className="ilustracion4_seccion8" src={ilustracion4_seccion8} alt="Imagen 3" />
       <p className=' parrafo_willian'> WILLIAN SANCHEZ 2022- hasta la fecha </p> 
          <p className='parrafo_final'>
          Es un honor presentarles al Señor Willian Sánchez, nuestro actual 
          párroco en la Iglesia María Madre de Dios, ubicada en nuestra querida 
          comunidad de Los Robles. Con su compromiso y dedicación pastoral, el
           Señor Willian guía y acompaña nuestra comunidad en su crecimiento espiritual.  
          </p>

         </div>
            </div>   /* fin de seccion todo  */
 
   );
 } 
 export default Historia;