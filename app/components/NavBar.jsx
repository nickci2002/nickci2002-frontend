import { NavBase, NavContact } from './NavElement';
import logoReact from '../assets/react.svg';
import '../styles/nav-bar.css'
import { preload } from 'react-dom';


/**
 * Top component that navigates across pages
 *  
 * @returns React nav element
 */
export default function NavBar() {
  preload("../assets/react.svg", {
    as: "logoReact"
  } );
  
  return (
    <nav id="nav-bar">
      <img src={logoReact} id="nav-logo" />
      <div id="nav-links">
        <div id="nav-elements">
          <NavBase to="/">
            Home
          </NavBase>
          <NavBase to="/projects">
            Projects
          </NavBase>
        </div>
        <div id="nav-contact">
          <NavContact to="/">
            Contact
          </NavContact>
        </div>
      </div>
    </nav>
  );
}