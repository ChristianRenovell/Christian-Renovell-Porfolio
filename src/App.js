import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Intro from './views/intro/Intro';
import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import Proyects from './views/proyects/Proyects';
import Knowledge from './views/knowledge/Knowledge';
import Contact from './views/contact/Contact';

import './assets/styles/App.scss';
import './assets/styles/stylemenu.scss';
import './assets/styles/foot.scss';
import './assets/styles/transitions.scss';


class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "",
      burger: "",
      index: null,
      menuOpen: false,
      footerOpen: true,
      navOpen: false,
      active: null

    };
    this.mode = this.mode.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.active = this.active.bind(this);
    this.itenControlSelected = this.itenControlSelected.bind(this);
    this.openFooter = this.openFooter.bind(this);

  };

  mode() {

    let elemento = document.getElementById("fullpage");
    let elemento2 = document.getElementById("switch");
    let photoCircle = document.getElementById("photo-circle");
    let btnContact = document.getElementById("btn-contact");
    let btnAbout = document.getElementById("btn-about");
    let btnOpenFooter = document.getElementById("btnOpenFooter");
    let contentNav = document.getElementById("contentNav");
    //cursor mode
    let bodyContent = document.getElementById("body")
    let btnBurger = document.getElementById("btn-burger");
    let navItem = document.getElementsByClassName("lin")

    if (elemento.className === "night") {

      //cursor mode
       bodyContent.className ="body-light";
       btnBurger.className += "btn-burger-light";
       navItem.className += "navIten-light";
      //contact
      try {
        btnContact.className = "btn-profile-light";
      } catch { }
      //profile
      try {
        photoCircle.src = "../images/christian-light.png";
        btnAbout.className = "btn-profile-light";
        
      } catch { }
      this.setState({ mode: "light" });
      this.setState({ burger: "burger" });

      elemento.className = "";
      elemento2.className = "swich-light";

      document.body.style.backgroundColor = "#f1ede3";
      btnOpenFooter.style.backgroundColor = "#555";
      contentNav.style.backgroundColor = "#f1ede3";
      elemento2.style.backgroundColor = "#555";

    }
    else {
      //cursor mode
      bodyContent.className ="body-darck";
      btnBurger.className += "btn-burger-darck";
      navItem.className += "navIten-darck";

      this.setState({ mode: "darck" });
      this.setState({ burger: "burger2" });
      //contact
      try {
        btnContact.className = "btn-profile-darck";
      } catch { }
      //profile
      try {
        photoCircle.src = "../images/christian-darck.png";
        btnAbout.className = "btn-profile-darck";
      } catch { }
      elemento.className += "night";
      elemento2.className += "switched swich-darck";

      document.body.style.backgroundColor = "#080d17";
      btnOpenFooter.style.backgroundColor = "#d87093"
      contentNav.style.backgroundColor = "#080d17";
      elemento2.style.backgroundColor = "#d87093";
    }
  }

  handleOpenMenu() {

    this.setState({ menuOpen: !this.state.menuOpen });
    this.setState({ navOpen: !this.state.navOpen });
  }

  active(index) {

    switch (index) {
      case 1:

        this.setState({ active: 1 });
        document.getElementById("nemuIten1").className = "navbar-brand lin selectedIten";
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";

        if (window.screen.width < 991) { this.handleOpenMenu() }

        break;

      case 2:
        this.setState({ active: 2 });
        document.getElementById("nemuIten2").className = "navbar-brand lin selectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";

        if (window.screen.width < 991) { this.handleOpenMenu() }

        break;
      case 3:
        document.getElementById("nemuIten3").className = "navbar-brand lin selectedIten";
        this.setState({ active: 3 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";

        if (window.screen.width < 991) { this.handleOpenMenu() }

        break;
      case 4:
        document.getElementById("nemuIten4").className = "navbar-brand lin selectedIten";
        this.setState({ active: 4 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten5").className = "navbar-brand lin noSelectedIten";

        if (window.screen.width < 991) { this.handleOpenMenu() }

        break;
      case 5:
        document.getElementById("nemuIten5").className = "navbar-brand lin selectedIten";
        this.setState({ active: 5 });
        document.getElementById("nemuIten2").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten3").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten4").className = "navbar-brand lin noSelectedIten";
        document.getElementById("nemuIten1").className = "navbar-brand lin noSelectedIten";

        if (window.screen.width < 991) { this.handleOpenMenu() }

        break;
    }
  }

  itenControlSelected() {

    let URLactual = window.location.href;

    if (URLactual === `https://christianrenovell.com/intro`) {
      this.active(1);
    }

    if (URLactual === `https://christianrenovell.com/home`) {
      this.active(1);
    }
    if (URLactual === `https://christianrenovell.com/profile`) {
      this.active(2);
    }

    if (URLactual === `https://christianrenovell.com/proyects`) {
      this.active(3);
    }

    if (URLactual === `https://christianrenovell.com/Knowledge`) {
      this.active(4);
    }

    if (URLactual === `https://christianrenovell.com/contact`) {
      this.active(5);
    }

  }

  openFooter() {
    this.setState({ footerOpen: !this.state.footerOpen });
    if (this.state.menuOpen) {
      this.handleOpenMenu()
    }
  }

  componentDidMount() {

    this.itenControlSelected();
    this.openFooter();


  }
  render() {


    window.onload = this.mode;
    return (
      <BrowserRouter>
        <div id="fullpage" className="night">
          <div className="section">
            <div id="intro-text">
              <div className={`${this.state.navOpen ? "navDivOpen" : "navDivClose"}`} id="navContentClose" onClick={this.handleOpenMenu} />
              <nav className="navbar navbar-expand-lg">
                <div
                  id="btn-burger"
                  className={`menu-btn ${this.state.menuOpen ? "open" : "closed"}`}
                  onClick={this.handleOpenMenu}
                >
                  <div className={this.state.burger} />
                </div>
                <div
                  id="contentNav"
                  className={`${this.state.menuOpen ? "showMenu" : "navmenu"}`}
                >
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                      <Link to={"/home"} id="nemuIten1" className="navbar-brand lin" onClick={() => this.active(1)}><span>Inicio</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/profile"} id="nemuIten2" className="navbar-brand lin" onClick={() => this.active(2)}><span>Sobre mí</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/proyects"} id="nemuIten3" className="navbar-brand lin" onClick={() => this.active(3)}><span>Proyectos</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/Knowledge"} id="nemuIten4" className="navbar-brand lin" onClick={() => this.active(4)}><span>Conocimientos</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/contact"} id="nemuIten5" className="navbar-brand lin" onClick={() => this.active(5)}><span>Contacto</span></Link>
                    </li>
                  </ul>

                </div>
                <div id="switch" onClick={this.mode}>
                  <div id="circle"></div>
                </div>
              </nav>

              <div className={`${this.state.footerOpen ? "closeFooterOpen" : "closeFooterClose"}`} onClick={this.openFooter}>
              </div>
              <div className="footIcon" id="btnOpenFooter" onClick={this.openFooter}>
                <img src={`https://christianrenovell.com/assets/pie-light.png`} width="40px" />
              </div>
              <div className={`${this.state.footerOpen ? "footerDivOpen" : "footerDivClose"}`} id="footer">
                <Footer mode={this.state.mode} 
                        url ={"https://christianrenovell.com"}/>
              </div>
            </div>
            <Route render={({ location }) => {
              const { pathname, key } = location;
              return (
                <Switch location={location} >
                  <Route
                    exact path='/'
                    render={(props) => (
                      <Intro {...props} mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                  <Route
                    exact path='/home'
                    render={(props) => (
                      <Home {...props} mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                  <Route
                    exact path='/profile'
                    render={(props) => (
                      <Profile {...props} mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                  <Route
                    exact path='/proyects'
                    render={(props) => (
                      <Proyects {...props}
                        mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                  <Route
                    exact path='/knowledge'
                    render={(props) => (
                      <Knowledge {...props} mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                  <Route
                    exact path='/contact'
                    render={(props) => (
                      <Contact {...props} mode={this.state.mode}
                        url={"https://christianrenovell.com"} />
                    )}
                  />
                </Switch>
              )
            }} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;