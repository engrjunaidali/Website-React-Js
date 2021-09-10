import React from 'react'
import "./services.css";
import logo_html from "./img/logo_html.png";
import logo_css from "./img/logo_css.png";
import logo_brush from "./img/logo_brush.png";

const services = () => {
    return (
        <div>
               <section id="boxes">
       <div class="container">
           <div class="box">
               <img src={logo_html} alt="logo_html"/>
               <h3>HTML5 MARKUP</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio.</p>
           </div>

           <div class="box">
                <img src={logo_css} alt="logo_css"/>
               <h3>CSS</h3>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio.</p>
           </div>

           <div class="box">
            <img src={logo_brush} alt="logo_brush"/>
            <h3>Graphic Design</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, optio.</p>
        </div>
       </div>
   </section>
        </div>
    )
}

export default services
