import '../styles/anchor-webpage.css';

/**
 * Abstract anchor component to link to other websites.
 * 
 * @param {string} href - URL the anchor points to
 * @param {string} title - Text displayed on anchor
 * @param {function} onMouseOver - Function called on mouse enter
 * @param {function} onMouseOut - Function called on mouse leave
 * @param {string} srcFade - Image that the bg changes to onMouseEnter
 * @returns React anchor element
 */

interface AnchorWebpageProps {
  href: string;
  title: string;
  onMouseOver: (value: string) => void;
  onMouseOut: () => void;
  srcFade?: string;
}

export default function AnchorWebpage ({ href,
                                         title,
                                         onMouseOver,
                                         onMouseOut,
                                         srcFade = "",
                                         ...props }: AnchorWebpageProps) {
  return (
    <a
      className="anchor-webpage"
      href={href}
      onMouseOver={() => onMouseOver(srcFade)}
      onMouseOut={() => onMouseOut()}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {title}
    </a>
  );
}