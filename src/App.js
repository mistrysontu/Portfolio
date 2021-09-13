// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from "react";
import styled from 'styled-components';
import SideBar from './Components/SideBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactMePage from './pages/ContactMePage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import {Route, Switch as Switching } from 'react-router';
function App() {
  return (
    <div className="App">j
      <MainContentStyled>
        {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div> */}
          {/* <HomePage/> */}
          <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/about" exact>
              <AboutPage />
            </Route>

            <Route path="/resume" exact>
              <ResumePage />
            </Route>

            <Route path="/projects" exact>
              <ProjectPage />
            </Route>

            <Route path="/contact" exact>
              <ContactMePage />
            </Route>
          </Switching>
      </MainContentStyled>
      <SideBar/>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`

export default App;
