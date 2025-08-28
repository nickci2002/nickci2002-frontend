import { useEffect, useState, useRef } from 'react'

import PageLayout from './PageLayout';
import AnchorWebpage from '../components/AnchorWebpage';
import linkedinImg from '../assets/linkedin.jpg';
import portrait from '../assets/logo-dark.svg';

import '../styles/landing.css';


const githubLink = 'https://github.com/nickci2002';
const linkedinLink = 'https://www.linkedin.com/in/nicholas-inglima/'

export default function Landing() {
  const [imgBg, setImgBg] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const fadeTimer = useRef<NodeJS.Timeout | null>(null);
  const transition = 300; // Hardcoded transition time, idc

  const handleMouseOver = (src: string) => {
    if (fadeTimer.current) {
      clearTimeout(fadeTimer.current);
      fadeTimer.current = null;
    }

    setVisible(false);
    requestAnimationFrame(() => {
      setImgBg(src);
      setVisible(true);
    });
  };

  const handleMouseOut = () => {
    setVisible(false);
    fadeTimer.current = setTimeout(() => {
      setImgBg("");
      fadeTimer.current = null;
    }, transition);
  };

  const style = {
    "--anchor-bg-url": (imgBg !== "") ? `url(${imgBg}) center/cover no-repeat`
                                      : "transparent",
    "opacity": visible ? 1 : 0,
    "transition": `all ${transition/1000}s ease-in-out`
  } as React.CSSProperties;
  
  return (
    <PageLayout>
      <h1> Welcome to Nickci2002.com! </h1>
      <div id="landing-content">
        <div id="landing-left-column">
          <p className="landing-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum.
          </p>
          <div id="anchor-wrapper">
            <div id="anchor-bg">
              <div
                id="anchor-bg-img"
                style={style}
              />
            </div>
            <div id="anchor-content">
              <h2> Links: </h2>
              <div id="anchor-buttons">
                <AnchorWebpage
                  title={"Linkedin"}
                  href={linkedinLink}
                  srcFade={linkedinImg}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                </AnchorWebpage>
                <AnchorWebpage
                  title={"GitHub"}
                  href={githubLink}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                </AnchorWebpage>

              </div>
            </div>
            
          </div>
        </div>
        <img className="face" src={portrait} />
      </div>      
    </PageLayout>
  );
}