import React from 'react'
import "./index.css";
import cli from "./images/cli.png"
import cloud from "./images/cloud.png"

import node from "./images/logos/node.png"
import python from "./images/logos/python.png"
import Csharp from "./images/logos/csharp.png"
import ruby from "./images/logos/ruby.png"
import php from "./images/logos/php.png"
import scala from "./images/logos/scala.png"
import clojure from "./images/logos/clojure.png"

const home = () => {
    return (
        <div>
            <section id="showcase">
                <div class="container">
                    <h1>Affordable Professional Web Design</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab porro ea nisi ipsa animi.</p>
                </div>
            </section>

            <section id="newsletter">
                <div class="container">
                    <h1>Subsribe to our newsletter</h1>
                    <form action="">
                        {/* <input type="email" placeholder="Enter your email..."> */}
                        {/* <button type="submit" class="button_1">Subscribe</button> */}
                    </form>
                </div>
            </section>

            <section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center my-1">
                Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div class="grid grid-3 text-center my-4">
                <div>
                    <i class="fas fa-server fa-3x"></i>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Deployments</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"></i>
                    <h3>987 TB</h3>
                    <p class="text-secondary">Published</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>2,343,265</h3>
                    <p class="text-secondary">Projects</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>2,546</h3>
                    <p class="text-secondary">Clients</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Cli --> */}
    <section class="cli">
        <div class="container grid">
            <img src={cli} alt=""/>
            <div class="card">
                <h3>Easy to use, cross platform CLI</h3>
            </div>
            <div class="card">
                <h3>Deploy in seconds</h3>
            </div>
        </div>
    </section>

    {/* <!-- Cloud --> */}
    <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
            <div class="text-center">
                <h2 class="lg">Extreme Cloud Hosting</h2>
                <p class="lead my-1">Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                <a href="features.html" class="btn btn-dark">Read More</a>
            </div>
            <img src={cloud} alt="cloud"/>
        </div>
    </section>

    {/* <!-- Languages --> */}
    <section class="languages">
        <h2 class="md text-center my-2">
            Supported Languages
        </h2>
        <div class="container flex">
            <div class="card">
                <h4>Node.js</h4>
                <img src={node} alt=""/>
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src={python} alt=""/>
              </div>
              <div class="card">
                <h4>C#</h4>
                <img src={Csharp} alt=""/>
              </div>
              <div class="card">
                <h4>Ruby</h4>
                <img src={ruby} alt=""/>
              </div>
              <div class="card">
                <h4>PHP</h4>
                <img src={php} alt=""/>
              </div>
              <div class="card">
                <h4>Scala</h4>
                <img src={scala} alt=""/>
              </div>
              <div class="card">
                <h4>Clojure</h4>
                <img src={clojure} alt=""/>
              </div>
        </div>
    </section>



        </div>
    )
}

export default home
