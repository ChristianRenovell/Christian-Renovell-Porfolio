import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './assets/styles/App.scss';
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import mode from './script';
import { play, exit } from './timelines';

const App = () => {
  return (
    <BrowserRouter>
      <div id="fullpage">
        <div className="section">
          <Header />
          <div id="switch" onClick={mode}>
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
                  timeout={{enter: 750, exit: 150}}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/contact" component={Contact}/>
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}/>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;