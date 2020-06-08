import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import imgswhats from "../images/waa.png"
import imgslinkin from "../images/linkin.png"
import imgsfb from "../images/fblogo.png"
import imgstwit from "../images/twitlogo.png"
import SEO from "../components/seo"
import imgLogo from "../images/cwmlogo.svg"
import svglogo from "../images/covilu12.svg"
import cwmppl from "../images/cwmppl.png"
import mesaLab from "../images/labOne.svg"
import plogoOne from "../images/btnlogo1.svg"
import plogoTwo from "../images/btnlogo2.svg"
import plogoTre from "../images/btnlogo3.svg"
import plogoFor from "../images/btnlogo4.svg"
import blkOne from "../images/blockOne.svg"
import blkTwo from "../images/blockTwo.svg"
import blkTre from "../images/blockTre.svg"

const IndexPage = () => (
  <Layout>
    <div>
    <SEO title="CWMexico" />
      
      <h1 className="headerHone glow" id="inicioMain" >Covid-19</h1>
        <p className="headerText" >
          Informacion concreta del actual virus por CWMexico. <br /><br />Una droguería pionera, líder en México en la preparación de medicamentos magistrales enfocados a mejorar la calidad de vida y en cumplimiento con estándares de calidad Internacional.
        </p>
      

      <div className="blockdiv">
        <a href="#HUno"><img id="imgBlkOne" className="wobble-hor-bottom" src={blkOne} alt="imgone" /></a>  
        <a href="#HDos"><img id="imgBlkOne" className="wobble-hor-bottom" src={blkTwo} alt="imgtwo" /></a> 
        <a href="#HTres"><img id="imgBlkOne" className="wobble-hor-bottom" src={blkTre} alt="imgtre" /></a> 
      </div>

        <a href="https://www.cwmexico.com.mx/"><img src={ imgLogo } alt="cwm-logo" className="cwmlogo" /></a>
        <a href="#inicioMainPage"><div id="btnInicio"></div></a>

      <a href="https://wa.me/526632054073"><img src={ imgswhats } alt="logowhats" id="imgwhats" /></a>
      <a href="https://www.linkedin.com/company/compounding-wholesalers-of-mexico/"><img src={ imgslinkin } alt="logolinkin" id="imglinkin" /></a>
      <a  href="https://web.facebook.com/cwofmexico/?_rdc=1&_rdr"><img src={ imgsfb } alt="logofb" id="imgfb" /></a>
      <a href="https://twitter.com/cw_mexico?lang=es"><img src={ imgstwit } alt="logotwit" id="imgtwit" /></a>


    <div className="boxTwo" >

    
      <div className="blockOne" >
      
      <h1 className="hOne tracking-out-contract-bck" id="HUno" >Que es el Coronavirus?</h1>
        
        <img src={svglogo} alt="logo" className="blockTwo" />
        <div className="boxOne" >
          <p className="boxshad jello-horizontal">
            Los Coronavirus, pertenecen a una Familia llamada Coronaviridae, y en esta familia se encuentran dos subfamilias:
          </p>
          <ul style={{ marginLeft: "5.45rem" }}>
            <li>
              <strong>Orthocoronavirinae</strong>
            </li>
            <li>
              <strong>Letovirinae</strong>
            </li>
          </ul>
          <p className="boxshad">
            Los Orthocoronavirinae se subdivide en 4 generos:
          </p>
          <ul style={{ marginLeft: "5.45rem" }}>
            <li>
              <strong>Alphacoronavirus</strong>
            </li>
            <li>
              <strong>Betacoronavirus</strong>
            </li>
            <li>
              <strong>Deltacoronavirus</strong>
            </li>
            <li>
              <strong>Gammacoronavirus</strong>
            </li>
          </ul>
        </div>
      </div>
        <p className="boxshad" id="bro">
          El actual Coronavirus en pandemia llamado COVID-19, se encuentra categorizado dentro de los Orthocoronavirinae y pertenece al género de los Betacoronavirus. Los Betacoronavirus, tienen ciertas características especiales en su envoltura vírica.La envoltura vírica es una estructura que rodea a la cápside vírica, el cual es un conjunto de proteínas que envuelven el material genético (ADN y ARN) de un virus, típica de los virus animales.
        </p>
      
        <div className="cvimg shake-horizontal">
          <Image />
        </div>
        <p className="boxshadTwo">
          De los animales proviene en buena parte de la membrana plasmática o nuclear del hospedador (humano); pero esta membrana celular no es el único componente de la envoltura; hacia el exterior aparecen glucoproteínas que están codificadas en el conjunto de genes del propio virus, la cual la glucoproteína se agrupa para formar púas o espinas que son importantísimos antígenos relacionados. Un antígeno puede ser una sustancia extraña proveniente del ambiente, como químicos, bacterias, virus o polen.
        </p>




        <h1  id="HDos" className="hOne" >
            ¿Que distingue al Coronavirus y que grado de capacidad tiene para desarrollar una mayor virulencia?
        </h1>
          <img src={mesaLab} alt="mesaLab" className="mesaLab" />
        
          <p className="boxshadTre">
            Parte del estudio de la patogenia (estudio del origen y desarrollo de las enfermedades) del Coronavirus es la envoltura. La envoltura del virus es flexible y pleomórfica, esto quiere decir que el virus puede tomar diferentes formas. Además, la envoltura tiene una bicapa lipídica relativamente sensible a la desecación, al calor y a los detergentes, con lo que es detectable simplemente con éter, que disuelve los lípidos, y el virus queda inactivado.
          </p>
          
          <img alt="cwmppl" src={cwmppl} className="cvdPpl" />
          <p id="boxFor"> 
            Entre las personas que tienen contacto cercano entre ellas (dentro de unos 6 pies de distancia).
            Mediante gotitas respiratorias que se producen cuando una persona infectada tose o estornuda.
            Estas gotitas pueden llegar a la boca o la nariz de las personas que se encuentren cerca o posiblemente entrar a los pulmones al momento de respirar.
          </p>

          <h1 id="HTres" className="hTwo tracking-out-contract-bck">¿Como se propaga el Coronavirus?</h1>

          
          
              
            
<div className="lupaimg">    
            <div className="boxshadimg">
                <img src={plogoOne} alt="btn1" id="plogoOne" className="pulsate-bck" />
                  <p className="boxCenter">
                    La función principal de la envoltura es ayudar al virus a entrar en la célula huésped (al humano). 
                  </p>
                  <img src={plogoTwo} alt="btn2" id="plogoTwo" className="pulsate-bck"/>
                  <p className="boxCenter">
                      Las glucoproteínas de la superficie de la envoltura del virus sirven para identificar y unirse a los puntos receptores en la membrana del huésped (humano), que permiten la interacción de determinadas sustancias con los mecanismos del metabolismo celular a las que se unen específicamente otras sustancias químicas llamadas moléculas señalizadoras, como las hormonas y los neurotransmisores.
                  </p>
                  <img src={plogoTre} alt="btn3" id="plogoTre" className="pulsate-bck"/>
                    <p className="boxCenter">
                      La envoltura vírica se fusiona después con la membrana de la célula del huésped, con lo que permite entrar a la cápsida y al genoma vírico.
                    </p>
                  <img src={plogoFor} alt="btn4" id="plogoFor" className="pulsate-bck"/>
                    <p className="boxCenter">
                      Por lo tanto, la célula infectada va a cargar y atraer más partículas del virus al huésped por un extenso periodo de tiempo, lo que provoca tener una mayor virulencia.
                    </p> 
            </div>
          </div>

          

      </div>
   
    </div>

        <div className="lastdiv wobble-hor-bottom" >
          <a href="/page-2" id="linkMargin">Posibles tratamientos y medicamentos</a>
        </div>
        <footer id="footerLow" >
                    
                          © Compounder Wholesalers Mexico, {new Date().getFullYear()}, Built by
                          {` `}
                          <a id="wow" href="https://ejs-port.herokuapp.com/">C.L.G.</a>
                    
        </footer>
  </Layout>
)

export default IndexPage
