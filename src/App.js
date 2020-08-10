import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './assets/styles/App.scss';
import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import Proyects from './views/proyects/Proyects';
import Contact from './views/contact/Contact';
import { play, exit } from './timelines';

class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: ""
    };
    this.mode = this.mode.bind(this);

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

      this.setState({ mode: "light" });
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

      elemento.className = "";
      elemento2.className = "";

    } else {

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
  
  render() {

    window.onload = this.mode;

    return (
      <BrowserRouter>
        <div id="fullpage">
          <div className="section">
            <Header mode={this.state.mode} />

            <div id="switch" onClick={this.mode} >
              <div id="circle" ></div>
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
                        exact path='/'
                        render={(props) => (
                          <Home {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/profile/:mode'
                        render={(props) => (
                          <Profile {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route
                        exact path='/proyects/:mode'
                        render={(props) => (
                          <Proyects {...props} mode={this.state.mode} />
                        )}
                      />
                      <Route exact path="/contact/:mode" component={Contact} />

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