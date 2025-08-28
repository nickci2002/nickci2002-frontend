/**
 * Abstract button component for the website.
 * 
 * @param {string} type - The button type (e.g., 'button', 'submit')
 * @param {function} onMouseOver - Function called on hover event
 * @param {function} onClick - Function called on click event
 * @param {React.ReactNode} children - Content inside the button
 * @param {object} props - Additional properties to pass to the button element
 * @returns React button element
 */
export default function Button ({ type = 'button',
                                  onMouseOver = () => {},
                                  onClick = () => {},
                                  children, ...props }) {
  return(
    <button 
      type={type}
      onMouseOver={onMouseOver}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
