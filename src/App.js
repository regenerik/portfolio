import './App.css';
import foto from "./imgs/foto2.png"
import codebug from "./imgs/codebug.png"
import time from "./imgs/time-outline.svg"
import people from "./imgs/people-outline.svg"
import card from "./imgs/id-card-outline.svg"
import share from "./imgs/share-outline.svg"
import tldec from "./imgs/tldec.png"
import youtube from "./imgs/logo-youtube.svg"
import cash from "./imgs/cash-outline.svg"
import github from "./imgs/logo-github.svg"
import linkedin from "./imgs/logo-linkedin.svg"
import codeb from "./imgs/codebug-outline.png"
import whats from "./imgs/logo-whatsapp.svg"
import cv from "./imgs/cv-outline.svg"
import henry from "./imgs/henry.png"
import cvPdf from "./imgs/cv.pdf"
import curso from "./imgs/desktop-outline.svg"
import certificado from "./imgs/certif.png"
import check from "./imgs/checkmark-outline.svg"
import js from "./imgs/logo-javascript.svg"
import sql from "./imgs/sql.png"
import redux from "./imgs/redux.png"
import html from "./imgs/logo-html5.svg"
import css from "./imgs/logo-css3.svg"
import node from "./imgs/logo-nodejs.svg"
import react from "./imgs/logo-react.svg"
import spanish from "./imgs/spain.png"
import english from "./imgs/english.png"
import auth from "./imgs/auth.png"
import axios from "./imgs/axios.png"
import cloudinary from "./imgs/cloudinary.png"
import markdown from "./imgs/markdown.png"
import paypal from "./imgs/paypal.png"
import psql from "./imgs/psql.png"
import sweet from "./imgs/sweet.png"
import { useState } from 'react'

function App() {

  const [cliqueado , setCliqueado] = useState(false)
  const [idioma , setIdioma ] = useState(false)


  const handleInfo = () => {
    if(cliqueado === true) setCliqueado(false)
    if(cliqueado === false) setCliqueado(true)

  }
  const handleIdioma = () =>{
    if(idioma) setIdioma(false)
    if(!idioma) setIdioma(true)
  }
  return (
    <div className="App">

 

      
      <div className={`col-1 ${"firstBox"}`}>

        <div className="tope">

        </div>
        <div className="navigation">
          <ul> 
            <li className="list" onClick={()=>handleInfo()}>
              <a href="#">
                <span className="icon" >
                  <img className="foto" src={foto} alt="fotoPerfil"></img>
                </span>
                {
                  cliqueado ? (
                    idioma ? (<p className="text">Volver</p>) : (<p className="text">Back</p>)
                  ) : (
                   idioma ? (<p className="text">Contacto</p>) : (<p className="text">Contact</p>)
                  )
                }

                
              </a>
            </li>
          </ul>
          
        </div>
        { 
        cliqueado ? (
          <div className='leftCard'>
            { idioma ? (<p className='titulo'>Contacto</p>) : (<p className='titulo'>Contact</p>) }
            <br></br>

            { idioma ? (<p className='alineado'>Nombre : David Ezequiel Cunha Quinteros</p>) : (<p className='alineado'>Name : David Ezequiel Cunha Quinteros</p>) }

            { idioma? (<p className='alineado'>Teléfono : +55 21 99404 6975</p>) : (<p className='alineado'>Telephone : +55 21 99404 6975</p>)}

            <p className='alineado'>E-mail : regenerik@gmail.com</p>

            <p className='alineado'>Local : Rio de Janeiro - Brasil</p>

          </div>
        ) : (
          <div className='leftCard'>
            {idioma? (<p className='titulo'>Portfolio personal</p>) : (<p className='titulo'>Personal portfolio</p>)}
            <br></br>
            {idioma? (<p>Este landing page fue creado para mostrar mi experiencia en el área de programación. Me encuentro a disposición por cualquier duda. Espero te sientas a gusto!</p>) : (<p>This landing page was created to show my experience in the programming area. I am available for any questions. I hope you feel comfortable!</p>)}
          </div>

        )
        
        }
       <div className='leftCard2'>
            { idioma? (<p className='titulo'>Accesos rápidos</p>) : (<p className='titulo'>Quick access</p>)}
            <br></br>

            <div className='rowLine'>
                <a href='https://github.com/regenerik' target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={github} alt="github" className='imgAcceso'/>
                  <p>Github</p>
                </a>
                <a href="https://www.youtube.com/telodigoencodigo"  target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={youtube} alt="github" className='imgAcceso'/>
                  <p>Youtube</p>
                </a>
                <a href='https://www.linkedin.com/in/david-cunha-quinteros/'  target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={linkedin} alt="linkedin" className='imgAcceso'/>
                  <p>Linkedin</p>
                </a>
            </div>

            <div className='rowLine2'>
                <a href='https://web.whatsapp.com/send?phone=5521994046975&text=Hola!'  target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={whats} alt="otro" className='imgAcceso'/>
                  <p>Whatsapp</p>
                </a>
                <a href={cvPdf}  target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={cv} alt="cv" className='imgAcceso'/>
                  <p>C.V.</p>
                </a>
                <a href='https://codebug-ten.vercel.app/' target="_blank" rel="noreferrer" className='columnaAcceso'>
                  <img src={codeb} alt="otro" className='imgAcceso'/>
                  <p>Codebug</p>
                </a>
                
            </div>

          </div>

      </div>



      <div className={`col-2 ${"secondBox"}`}>
        

        {/* --------------------FLIP IMAGE--------------------- */}
        <div className='boddy'>

          <div className='card'>
            <div className='face front'>
              { idioma? (<h2>Bienvenido</h2>):(<h2>Wellcome</h2>)}
            </div>
            <div className='face back'>
              { idioma? (<h2>A MI PORTFOLIO</h2>) : (<h2> to my portfolio</h2>)}
            </div>
          </div>
          <div className='idioma' onClick={()=>handleIdioma()}>
            {idioma? (<img className='size' src={english} alt="english"/>) : (<img className='size' src={spanish} alt="spanish"/> )}
          </div>
        </div>
        {/* ------------------------TECNOLOGIAS--------------------------- */}
        {idioma? (<h2 className='textoIntro'>Hola! Mi nombre es David. Soy desarroyador full-stack.</h2>) : (<h2 className='textoIntro'>Hi! My name is David. I'm a Full-Stack developer.</h2>)}
        {idioma? (<h3 className='textoIntro'>Las tecnologias que manejo son:</h3>) : (<h3 className='textoIntro'>The technologies I use are:</h3>)}
        <div className='tecnologias'>
            <a className='columnaAcceso'>
              <img src={js} alt="js" className='imgAcceso'/>
              <p>JavaScript</p>
            </a>
            <a className='columnaAcceso'>
              <img src={html} alt="html" className='imgAcceso'/>
              <p>Html 5</p>
            </a>
            <a className='columnaAcceso'>
              <img src={css} alt="css" className='imgAcceso'/>
              <p>Css 3</p>
            </a>
            <a className='columnaAcceso'>
              <img src={node} alt="node" className='imgAcceso'/>
              <p>Node</p>
            </a>
            <a className='columnaAcceso'>
              <img src={react} alt="react" className='imgAcceso'/>
              <p>React</p>
            </a>
            <a className='columnaAcceso'>
              <img src={redux} alt="redux" className='imgAcceso'/>
              <p>Redux</p>
            </a>
            <a className='columnaAcceso'>
              <img src={sql} alt="sql" className='imgAcceso'/>
              <p>SQL</p>
            </a>
            <a className='columnaAcceso'>
              <img src={github} alt="github" className='imgAcceso'/>
              <p>Github</p>
            </a>
        </div>
{/* ----------------------IMPLEMENTACIONES------------------------------- */}
        {idioma? (<h3 className='textoIntro'>Algunos de los recursos ya implementados:</h3>) : (<h3 className='textoIntro'>Some already used resourses:</h3>)}
        <div className='tecnologias'>
            <a className='columnaAcceso'>
              <img src={auth} alt="js" className='imgAcceso'/>
              <p>Auth 0</p>
            </a>
            <a className='columnaAcceso'>
              <img src={axios} alt="html" className='imgAcceso'/>
              <p>Axios</p>
            </a>
            <a className='columnaAcceso'>
              <img src={cloudinary} alt="css" className='imgAcceso'/>
              <p>Cloudinary</p>
            </a>
            <a className='columnaAcceso'>
              <img src={markdown} alt="node" className='imgAcceso'/>
              <p>Markdown</p>
            </a>
            <a className='columnaAcceso'>
              <img src={paypal} alt="react" className='imgAcceso'/>
              <p>Paypal</p>
            </a>
            <a className='columnaAcceso'>
              <img src={psql} alt="redux" className='imgAcceso'/>
              <p>Psql</p>
            </a>
            <a className='columnaAcceso'>
              <img src={sweet} alt="sql" className='imgAcceso'/>
              <p>Sweet Alert</p>
            </a>
        </div>






{/* -----------------------------LOGROS---------------------------------- */}
        { idioma ? (<p className='secondBoxTitle'>Últimos logros</p>) : (<p className='secondBoxTitle'>Latest achievements</p>)}
                  <div className='cardTrabajo' >
                    <div className='codebug_caja'>
                      <a href='https://codebug-ten.vercel.app'  target="_blank" rel="noreferrer">
                        <img src={ codebug } alt="codebug_image" className='codebug_image'/>
                      </a>
                    </div>               
                    <div className='columna_iconos'>
                      <div className='linea'>
                          <img src={time} alt="time" className='time'/>
                        { idioma? (<p>30 dias</p>) : (<p>30 days</p>)}
                      </div>
                      <div className='linea'>
                        <img src={people} alt="people" className='time'/>
                        {idioma? (<p>8 personas</p>) : (<p>8 people</p>)}
                      </div>
                      <div className='linea'>
                        <img src={card} alt="card" className='time'/>
                        {idioma? (<p>Adaptativo</p>) : (<p>Responsive</p>)}
                      </div>
                      <div className='linea'>
                        <img src={share} alt="share" className='time'/>
                        {idioma? (<p>Desplegado</p>):(<p>Deployed</p>)}
                      </div>
                    </div>
                    <div className='divTextoCardTrabajo'>
                      {idioma? (<p className='tituloCardTrabajo'>Sitio Web de preguntas y respuestas</p>):(<p className='tituloCardTrabajo'>Website for questions and answers</p>)}
                      {idioma? (<p className='tituloCardTrabajo'>entre estudiantes de programación.</p>): (<p className='tituloCardTrabajo'>between programming students.</p>) }
                      <br/>
                      {idioma? (<p>Mis mayores aportes en su desarroyo fueron:</p>) : (<p>My greatest contributions in its development were:</p>)}
                      {idioma? (<p>º Maquetado total del sitio y rutas º Sistema Log-in</p>) : (<p>º Total layout of the site and routes º Log-in System</p>)}
                      {idioma? (<p>º Identidad visual º Animación de Logo-Marca</p>) : (<p>º Visual identity º Logo-Brand Animation</p>)}
                      {idioma? (<p>º Paypal implementado º Cloudinary implementado</p>) : (<p>º Paypal implemented º Cloudinary implemented</p>)}
                      {idioma? (<p>º Ayuda general en el área front-end º Video tutorial</p>) : (<p>º General help in the front-end area º Video tutorial</p>)}
                    </div>
                  </div>



                  <div className='cardTrabajo' >
                    <div className='tldec_caja'>
                      <a href='https://www.youtube.com/telodigoencodigo'  target="_blank" rel="noreferrer">
                        <img src={ tldec } alt="tldec_image" className='tldec_image'/>
                      </a>
                    </div>  
                    <div className='columna_iconos'>
                      <div className='linea'>
                          <img src={time} alt="time" className='time'/>
                          {idioma? (<p>5 meses</p>): (<p>5 months</p>)}
                      </div>
                      <div className='linea'>
                        <img src={people} alt="people" className='time'/>
                        {idioma? (<p>1 persona</p>): (<p>Just 1</p>)}
                      </div>
                      <div className='linea'>
                        <img src={youtube} alt="ytb" className='time'/>
                        <p>Youtube</p>
                      </div>
                      <div className='linea'>
                        <img src={cash} alt="cash" className='time'/>
                        {idioma? (<p>Monetiza</p>): (<p>Monetize</p>)}
                      </div>
                    </div>
                    <div className='divTextoCardTrabajo'>
                      {idioma? (<p className='tituloCardTrabajo'>Canal en youtube de introducción</p>):(<p className='tituloCardTrabajo'>YouTube channel for introduction to</p>)}
                      {idioma? (<p className='tituloCardTrabajo'>al estudio de la programación.</p>) : (<p className='tituloCardTrabajo'>the study of programming.</p>)}
                      <br/>
                      {idioma? (<p>El canal contiene:</p>) : (<p>The channel contains:</p>)}
                      {idioma? (<p> º Inclución de estudiantes en grupos de integración-</p>) : (<p> º Inclusion of students in integration groups</p>)}
                      {idioma? (<p>º Más de 4.000 horas de reproducción </p>) : (<p>º More than 4,000 hours of playback</p>)}
                      {idioma? (<p>º Más de 2.000 seguidores </p>) : (<p>º More than 2,000 followers</p>)}
                      {idioma? (<p>º Más de 100 videos disponibles</p>) : (<p>º More than 100 videos available</p>)}
                      {idioma? (<p>º Explicaciones detalladas paso a paso</p>) : (<p>º Detailed step-by-step explanations</p>)}
                      {idioma? (<p>º Conceptos básicos en J.S. </p>) : (<p>º Basic concepts in J.S.</p>)}
                      {idioma? (<p>º Canal en constante desarroyo</p>) : (<p>º Channel in constant development</p>)}
                    </div>
                  </div>


                  <div className='cardTrabajo' >
                    <div className='tldec_caja'>
                      <a href={certificado}  target="_blank" rel="noreferrer">
                        <img src={ henry } alt="henry_image" className='tldec_image'/>
                      </a>
                    </div>  
                    <div className='columna_iconos'>
                      <div className='linea'>
                          <img src={time} alt="time" className='time'/>
                        {idioma? (<p>5 meses</p>):(<p>5 months</p>)}
                      </div>
                      <div className='linea'>
                        <img src={people} alt="people" className='time'/>
                        {idioma? (<p>1 persona</p>):(<p>just 1</p>)}
                      </div>
                      <div className='linea'>
                        <img src={curso} alt="curso" className='time'/>
                        {idioma? (<p>Curso</p>):(<p>Course</p>)}
                      </div>
                      <div className='linea'>
                        <img src={check} alt="cash" className='time'/>
                        {idioma? (<p>Completo</p>):(<p>Complete</p>)}
                      </div>
                    </div>
                    <div className='divTextoCardTrabajo'>
                      {idioma? (<p className='tituloCardTrabajo'>Curso concluido Full-Stack Developer</p>):(<p className='tituloCardTrabajo'>Completed course Full-Stack Developer</p>)}
                      <p className='tituloCardTrabajo'>Henry</p>
                      <br/>
                      {idioma? (<p>El curso fue realizado en modalidad full time.</p>):(<p>The course was conducted in full time mode.</p>)}
                      {idioma? (<p> º Tecnologias: JS, HTML, Node, CSS, React, Redux, SQL</p>):(<p> º Technologies: JS, HTML, Node, CSS, React, Redux, SQL</p>)}
                      {idioma? (<p>º Trabajo de "Teaching Assistant" durante el curso </p>):(<p>º Work as "Teaching Assistant" during the course</p>)}
                      {idioma? (<p>º Asistencia Completa </p>):(<p>º Full Assistance </p>)}
                      {idioma? (<p>º Más de 800 horas de curso</p>):(<p>º More than 800 course hours</p>)}
                      {idioma? (<p>º Equipos de trabajo conformados</p>):(<p>º Work teams formed</p>)}
                      {idioma? (<p>º Realización de trabajo individual full-stack</p>):(<p>º Realization of full-stack individual work</p>)}
                      {idioma? (<p>º Realización de trabajo grupal full-stack</p>):(<p>º Realization of full-stack group work</p>)}
                    </div>
                  </div>

                  {/* ------------------ABOUT ME------------------ */}
                  <div className='aboutMe'>
                    { idioma ? (<h2>Acerca de mi:</h2>) : (<h2>About me:</h2>)}
                    { idioma ? (<p className='aboutMeText'>Soy una persona comunicativa y conciliadora. Disfruto de la oratoria frente a muchas personas y sobre todo de poder enseñar y o transmitir ideas con la mayor claresa posible. Me dediqué por muchos años a la producción audiovisual. Mis mejores logros  fueron en la creación logomarcas animadas como en retoques fotográficos y soluciones multimedia en general.</p>): (<p className='aboutMeText'>I am a communicative and conciliatory person. I enjoy speaking in front of many people and above all being able to teach and/or transmit ideas as clearly as possible. I dedicated myself for many years to audiovisual production. My best achievements were in the creation of animated logos as well as in photographic retouching and multimedia solutions in general.</p>)}

                        {idioma? (<p className='aboutMeText'>Éste último año (2022) me eh dedicado enteramente a la programación. Al principio comencé a estudiar por mi cuenta utilizando cursos online. Luego de un tiempo decidí ingresar al curso ofrecido por Henry.

                          Sin dejar de lado la humildad, estoy orgulloso al poder afirmar que me encuentro capacitado para aprender por mi cuenta nuevas tecnologías y además puedo conciderarme una pieza fundamental en el futuro de su empresa.</p>):(<p className='aboutMeText'>This last year (2022) I have dedicated myself entirely to programming. At first I started studying on my own using online courses. After a while I decided to join the course offered by Henry.

                          Without neglecting humility, I am proud to say that I am able to learn new technologies on my own and I can also consider myself a fundamental piece in the future of your company.</p>)}
                        {idioma? (<p className='aboutMeText'>Mis puntos más fuertes son:</p>):(<p className='aboutMeText'>My strongest points are:</p>)}

                        {idioma? (<p className='aboutMeText'>º Capacidad de organización y liderazgo como  par. Disfruto motivar a un equipo recordándoles a sus integrantes lo valiosos que son y lo buenos que son haciendo sus trabajos.</p>):(<p className='aboutMeText'>º Capacity for organization and leadership as a peer. I enjoy motivating a team by reminding them how valuable they are and how good they are at their jobs.</p>)}
                        {idioma? (<p className='aboutMeText'>º Facilidad para comenzar proyectos desde cero. Apesar de no tener mucha experiencia en el diseño visual web, puedo planificar la estructura necesaria de un sitio para que el usuario final lo persiva orgánico y de facil manipulación.</p>):(<p className='aboutMeText'>º Easy to start projects from scratch. Despite not having much experience in visual web design, I can plan the necessary structure of a site so that the end user perceives it organically and easily.</p>)}
                        {idioma? (<p className='aboutMeText'>º Tengo mucha paciencia y facilidad para transmitir ideas, enseñar y entender que pequeños detalles en la comunicación hacen toda la diferencia.
                        Mi posición ideal en una empresa sería poder ayudar a las personas nuevas a adaptarse a sus puestos laborales de manera técnica y social.</p>):(<p className='aboutMeText'>º I have a lot of patience and ability to transmit ideas, teach and understand that small details in communication make all the difference.
                        My ideal position in a company would be to be able to help new people adapt to their jobs in a technical and social way.</p>)}
                        {idioma? (<p className='aboutMeText'>º Actualmente creo contenido de interés en Youtube ayudando iniciantes en programación mediante mi canal: www.youtube.com/telodigoencodigo
                        Ayudar se siente muy bien.</p>):(<p className='aboutMeText'>º I currently create content of interest on YouTube helping beginners in programming through my channel: www.youtube.com/telodigoencodigo
                        Helping feels great.</p>)}

                        {idioma? (<p className='aboutMeText'>º Puedo comunicarme en Ingles Nivel C1 , Portugues nativo y Español Nativo</p>):(<p className='aboutMeText'>º ºI can communicate in English Level C1 , Portugues native and Spanish Native</p>)}

                        {idioma? (<p className='aboutMeText'>Si llegaste hasta este punto de mis detalles, te estoy muy agradecido por tu tiempo. Espero pronto formar parte de tu equipo de trabajo.</p>):(<p className='aboutMeText'>If you got to this point in my details, I'm very grateful for your time. I hope to be part of your team soon.</p>)}
                  </div>

                  
      </div>





        
    </div>
  );
}

export default App;
