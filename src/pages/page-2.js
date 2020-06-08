import React from "react"
import { Link } from "gatsby"
import "../components/layout.css"

import SEO from "../components/seo"
import imgswhats from "../images/waa.png"
import imgslinkin from "../images/linkin.png"
import imgsfb from "../images/fblogo.png"
import imgstwit from "../images/twitlogo.png"

const SecondPage = () => (
  <div id="imgInicioDos">
    <SEO title="Contactanos" />
    
    <a href="https://www.cwmexico.com.mx/"><div id="btnDos"></div></a>
      <a href="/" ><div className="bounce-bottom" id="btnInicioDos"></div></a>

      <a href="https://wa.me/526632054073"><img src={ imgswhats } alt="logowhats" id="imgwhats" className="pulsate-bck"  /></a>
      <a href="https://www.linkedin.com/company/compounding-wholesalers-of-mexico/"><img src={ imgslinkin } alt="logolinkin" id="imglinkin" className="pulsate-bck" /></a>
      <a  href="https://web.facebook.com/cwofmexico/?_rdc=1&_rdr"><img src={ imgsfb } alt="logofb" id="imgfb" className="pulsate-bck" /></a>
      <a href="https://twitter.com/cw_mexico?lang=es"><img src={ imgstwit } alt="logotwit" id="imgtwit" className="pulsate-bck" /></a>

      <div id="pgTwotxtOne" className="pulsate-bck" ><p>Mantente al tanto de todas las novedas a traves de nuestras redes sociales ⇢</p></div>
      <div id="pgTwotxtTwo" ><p>⇠ Para servicios medicos visita la pagina oficial de Compunder Wholesalers Mexico</p></div>
      
        <footer id="footerLowTwo" >
                    
                          © Compounder Wholesalers Mexico, {new Date().getFullYear()}, Built by
                          {` `}
                          <a id="wow" href="https://ejs-port.herokuapp.com/">C.L.G.</a>
                    
        </footer>
  </div>
)

export default SecondPage
