import React from 'react'
import "./contact.css";

const contact = () => {
    return (
        <div>
            {/* <!-- Showcase --> */}
    <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Easier Deployment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempore laboriosam temporibus minus eveniet quidem.</p>
                <a class="btn btn-outline" href="features.html">Read More</a>
            </div>

            <div class="showcase-form card">
                <h2>Request a Demo</h2>
                <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" required/>
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary"/>
                </form>
            </div>
        </div>
    </section>

    {/* <!-- Stats --> */}
                <section class="stats">
                    <div class="container">
                        <h3 class="stats-heading text-center my-1">
                            Welcome to the best platform for building applications of all types with modern architecture and scaling
                        </h3>

                        <div class="grid grid-3 text-center my-4">
                            <div>
                                <i class="fas fa-server fa-3x"></i>
                                <h3>10,349,405</h3>
                                <p class="text-secondary">Deployment</p>
                            </div>
                            <div>
                                <i class="fas fa-upload fa-3x"></i>
                                <h3>989 TB</h3>
                                <p class="text-secondary">Published</p>
                            </div>
                            <div>
                                <i class="fas fa-project-diagram fa-3x"></i>
                                <h3>2,445,234</h3>
                                <p class="text-secondary">Projects</p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default contact
