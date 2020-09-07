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
import './assets/styles/stylemenu.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "",
      burger: "",
      index: null,
      menuOpen: false,
      active: null
    };
    this.mode = this.mode.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.active = this.active.bind(this);
    this.itenControlSelected = this.itenControlSelected.bind(this);

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
      this.setState({ burger: "burger" });

      elemento.className = "";
      elemento2.className = "";


      document.body.style.backgroundColor = "#f1ede3";
    }
    else {

      this.setState({ mode: "darck" });
      this.setState({ burger: "burger2" });
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
      document.body.style.backgroundColor = "#080d17";

    }
  }

  handleOpenMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  active(index) {

    switch (index) {
      case 1:
        document.getElementById("nemuIten1").className = "navbar-brand lin selectedIten";
        this.setState({ active: 1 });

        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";
        break;
      case 2:
        document.getElementById("nemuIten2").className = "navbar-brand lin selectedIten";
        this.setState({ active: 2 });
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";
        break;
      case 3:
        document.getElementById("nemuIten3").className = "navbar-brand lin selectedIten";
        this.setState({ active: 3 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";
        break;
      case 4:
        document.getElementById("nemuIten4").className = "navbar-brand lin selectedIten";
        this.setState({ active: 4 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";
        break;
      case 5:
        document.getElementById("nemuIten5").className = "navbar-brand lin selectedIten";
        this.setState({ active: 5 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        break;
    }
  }

  itenControlSelected() {

    let URLactual = window.location.href;

    if (URLactual === "http://localhost:3000/home") {
      this.active(1);
    }
    if (URLactual === "http://localhost:3000/profile/") {
      this.active(2);
    }

    if (URLactual === "http://localhost:3000/proyects/") {
      this.active(3);
    }

    if (URLactual === "http://localhost:3000/Knowledge/") {
      this.active(4);
    }

    if (URLactual === "http://localhost:3000/contact/") {
      this.active(5);
    }

  }

  componentDidMount() {

    this.itenControlSelected();

  }

  render() {

    window.onload = this.mode;

    return (

      <BrowserRouter>
        <div id="fullpage" className="night">
          <div className="section ">
            <div id="intro-text">
              <nav className="navbar navbar-expand-lg  ">
                <div
                  className={`menu-btn ${this.state.menuOpen ? "open" : "closed"}`}
                  onClick={this.handleOpenMenu}
                >
                  <div className={this.state.burger} />
                </div>
                <div
                  className={`${this.state.menuOpen ? "showMenu" : "navmenu"}`}
                >
                  <div className="">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <Link to={"/home"} id="nemuIten1" className="navbar-brand lin" onClick={() => this.active(1)}><span>Inicio</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/profile/`} id="nemuIten2" className="navbar-brand lin" onClick={() => this.active(2)}><span>sobre mí</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/proyects/`} id="nemuIten3" className="navbar-brand lin" onClick={() => this.active(3)}><span>Proyectos</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link to={`/Knowledge/`} id="nemuIten4" className="navbar-brand lin" onClick={() => this.active(4)}><span>Conocimientos</span></Link>
                      </li>
                      <li className="nav-item mr-3">
                        <Link to={`/contact/`} id="nemuIten5" className="navbar-brand lin" onClick={() => this.active(5)}><span>Contacto</span></Link>
                      </li>
                      <li className="nav-item">
                        <div className="row">
                          <div className="col-12 col-md-6 pt-1">
                            <img src={`../images/es-${this.state.mode}.png`} width="35px"></img>
                          </div>
                          <div className="col-12  col-md-6 pt-1">
                            <img src={`../images/eng-${this.state.mode}.png`} width="35px"></img>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="switch" onClick={this.mode} >
                  <div id="circle" ></div>
                </div>
              </nav>
            </div>
            <Route render={({ location }) => {
              const { pathname, key } = location;

              return (
                <TransitionGroup component={null} >
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node, appears) => play(pathname, node, appears)}
                    onExit={(node, appears) => exit(node, appears)}
                    timeout={{ enter: 750, exit: 150 }}
                  >
                    <Switch location={location} >
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