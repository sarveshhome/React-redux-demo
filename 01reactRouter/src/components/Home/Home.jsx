import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container-fluid px-0">
           <section class="jumbotron text-center">
            <div class="container">
                <h1 class="jumbotron-heading">React Routing Home page</h1>
                <p class="lead text-muted">
                    React Router is a powerful and flexible routing library for building
                    single-page applications in React. It provides a declarative way to define
                    routes and navigate between different components in your application.
                </p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Main call to action</a>
                    <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                </p>
            </div>
        </section>  

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <h5 class="card-title">AI </h5>
                                <p class="card-text">
                                    AI is a branch of computer science that focuses on
                                    creating intelligent machines capable of performing tasks
                                    that typically require human intelligence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <h5 class="card-title">Azure </h5>
                                <p class="card-text">
                                    Azure is a cloud computing platform and service created by
                                    Microsoft, providing a wide range of cloud services,
                                    including virtual machines, databases, and more.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <div class="card-body">
                                <h5 class="card-title">React</h5>
                                <p class="card-text">
                                    react is a popular JavaScript library for building user
                                    interfaces, particularly single-page applications, with a
                                    component-based architecture that allows for efficient
                                    rendering and state management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}