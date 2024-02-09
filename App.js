// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/styles.css';
import Header from './components/Header';
import Home from './components/Home';
import Articles from './components/Articles';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <main>
          <section className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;





// To run:
//
// export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
// [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
// nvm install 16.13.0
// nvm use 16.13.0
// npm start