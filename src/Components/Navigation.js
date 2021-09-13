import React from "react";
import styled from "styled-components";
import avtar from "../img/avtar.jpeg";
import { NavLink } from "react-router-dom";
function Navigation() {
  return (
    <NavigationStyled>
      <div class="avtar">
        <img src={avtar} alt="avtar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class" exact>
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active-class" exact>
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>
            Contact Me
          </NavLink>
        </li>
      </ul>
      <footer>
        <p>@2021 My Protfolio App</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avtar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border: 8px solid var(--border-color);
      border-radius: 50%;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        text-transform: uppercase;
        font-weight: bold;
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.25;
        }
      }

      a:hover::before {
        content: "";
        width: 100%;
        height: 100%;
      }

    }
    .active-class {
      background-color: var(--primary-color);
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      display: block;
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

export default Navigation;
