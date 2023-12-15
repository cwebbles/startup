import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import '../static/starfield_icon_1.png'
import '../static/main.css'
import '../static/index.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Starlog } from './starlog/starlog';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
        <div className='body'>
            <header>
                <div>
                    <h1 style={{float: 'left'}}>Starfield&reg; Starlog</h1>
                    <div className="color-block-container">
                        <div className="color-block" id="block1"></div>
                        <div className="color-block" id="block2"></div>
                        <div className="color-block" id="block3"></div>
                        <div className="color-block" id="block4"></div>
                    </div>
                </div>
                

                <div>
                    <Navbar className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to=''>Start</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='log'>Starlog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='about'>About</NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </Navbar>
                </div>
                <hr />
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/log' element={<Starlog />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <hr />
                <span className="text-reset signature">Collin Webb</span>
                <br />
                <a className="github-link" href="https://github.com/cwebbles/startup">GitHub</a>
            </footer>
        </div>
    </BrowserRouter>
  );

  function NotFound() {
    return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
  }
}