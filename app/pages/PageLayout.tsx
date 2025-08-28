import NavBar from '../components/NavBar.jsx';
import '../styles/page-content.css';


/**
 * Default page layout that includes the NavBar and a main content area
 * 
 * @param children Content to be displayed within the main area
 * @returns 
 */
export default function PageLayout({ children } : { children: React.ReactNode }) {
  return (
    <>
    <NavBar />
    <main id="page-content">
      {children}
    </main>
    </>
  );
}