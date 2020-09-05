import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Footer from './components/footer/Footer';
import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import Proyects from './views/proyects/Proyects';
import Knowledge from './views/knowledge/Knowledge';
import Contact from './views/contact/Contact';
import { play, exit } from './timelines';
import './assets/styles/App.scss';
import burger from './assets/static/burger.png';
import Burger from './components/burger/Burger';


class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: ""
    };
    this.mode = this.mode.bind(this);
    this.hola = this.showItens.bind(this);



  };

  mode() {

    let elemento = document.getElementById("fullpage");
    let elemento2 = document.getElementById("switch");
    let face = document.getElementById("facebook");
    let insta = document.getElementById("instagram");
    let linke = document.getElementById("linkedin");
    let git = document.getElementById("git");
    let photoCircle = document.getElementById("photo-circle");
    let btnContact = document.getElementById("btn-contact");
    let btnAbout = document.getElementById("btn-about");

    if (elemento.className === "night") {

      //contact
      try {
        btnContact.className = "btn-profile-light";
        face.src = "../images/facebook-light.png";
        insta.src = "../images/instagram-light.png";
        linke.src = "../images/linkedin-light.png";
        git.src = "../images/git-light.png";
      } catch{ }
      //profile
      try {
        photoCircle.src = "../images/christian-light.png";
        photoCircle.className = "circle-profile-light";
        btnAbout.className = "btn-profile-light";

      } catch{ }
      this.setState({ mode: "light" });
      elemento.className = "";
      elemento2.className = "";

    }
    else {

      this.setState({ mode: "darck" });
      //contact
      try {
        btnContact.className = "btn-profile-darck";
        face.src = "../images/facebook-darck.png";
        insta.src = "../images/instagram-darck.png";
        linke.src = "../images/linkedin-darck.png";
        git.src = "../images/git-darck.png";
      } catch{ }
      //profile
      try {
        photoCircle.src = "../images/christian-darck.png";
        photoCircle.className = "circle-profile-darck";
        btnAbout.className = "btn-profile-darck";
      } catch{ }
      elemento.className += "night";
      elemento2.className += "switched";
    }
  }
   showItens(){

    var x = document.getElementById("l1");

    if (x.style.display === "none") {
      
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  render() {

    window.onload = this.mode;

    return (
      <BrowserRouter>
        <div id="fullpage" className="night">
          <div className="section">
            <div id="intro-text" className="mb-5">
              <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="">
                    <img src={burger} width="50px" />
                  </span>
                </button>
                <Burger onClick={this.showItens}/>
                <div className="collapse navbar-collapse textcolor" id="navbarTogglerDemo01">
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                      <Link to={"/home"} id="l1" className="navbar-brand lin">Inicio</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/profile/`} className="navbar-brand lin">sobre mí</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/proyects/`} className="navbar-brand lin">Proyectos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/Knowledge/`} className="navbar-brand lin">Conocimientos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={`/contact/`} className="navbar-brand lin">Contacto</Link>
                    </li>
                  </ul>
                </div>
                <div id="switch" onClick={this.mode} >
                  <div id="circle" ></div>
                </div>
              </nav>
            </div>
            <Route render={({ location }) => {
              const { pathname, key } = location;

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 750, exit: 150 }}
                  >
                    <Switch location={location}>
                      <Route
                        exact path='/home'
                        render={(props) => (
                          <Home {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/profile/'
                        render={(props) => (
                          <Profile {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/proyects/'
                        render={(props) => (
                          <Proyects {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/knowledge/'
                        render={(props) => (
                          <Knowledge {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/contact/'
                        render={(props) => (
                          <Contact {...props} mode={this.state.mode} />
                        )}
                      />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              )
            }} />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;