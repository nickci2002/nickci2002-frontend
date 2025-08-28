import { NavLink } from 'react-router';
import '../styles/nav-element.css';


// For 'Contact Me' button
// const ENCODED_EMAIL = process.env.B64_EMAIL;
// const DECODED_EMAIL = atob(ENCODED_EMAIL);

/**
 * Individual button element used to change routes in the NavBar.
 * 
 * @param {string} to - The URL to go to when the link is clicked
 * @param {string} className - The type of NavLink we're calling
 * @param {React.ReactNode} children - Content inside the anchor
 * @param {object} props - Additional properties to pass to the NavLink
 * @return NavLink Element
 */
function NavElement({ to, className, children, ...props }) {
  return (
    <NavLink className={className} to={to} {...props}>
      {children}
    </NavLink>
  );
}

/**
 * Subelement of {@link NavElement} that only contains text
 */
export function NavBase({ to, children, ...props }) {
  return(
    <NavElement 
      className={'nav-base'}  
      to={to}
      children={children}
      {...props}
    />
  );
}

/**
 * Subelement of {@link NavElement} that contains text and a background
 */
export function NavContact({ to, children, ...props }) {
  return(
    <NavElement 
      className={'nav-contact'}  
      to={to}
      children={children}
      {...props}
    />
  );
}