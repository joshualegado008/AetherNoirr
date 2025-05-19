import React, { useState, useEffect } from 'react';

const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setHidden(true));
    document.addEventListener('mouseenter', () => setHidden(false));

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', () => setHidden(true));
      document.removeEventListener('mouseenter', () => setHidden(false));

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  // We need to update link event listeners when new links are added
  useEffect(() => {
    const handleLinkHoverIn = () => setLinkHovered(true);
    const handleLinkHoverOut = () => setLinkHovered(false);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverIn);
      link.addEventListener('mouseleave', handleLinkHoverOut);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverIn);
        link.removeEventListener('mouseleave', handleLinkHoverOut);
      });
    };
  }, []);

  const cursorClasses = `
    fixed w-5 h-5 rounded-full pointer-events-none z-50
    bg-transparent border-2 border-red-600
    transform -translate-x-1/2 -translate-y-1/2
    transition-transform duration-100
    flex items-center justify-center
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${clicked ? 'scale-75' : ''}
    ${linkHovered ? 'scale-150' : ''}
  `;

  const cursorDotClasses = `
    fixed w-2 h-2 rounded-full pointer-events-none z-50
    bg-red-600
    transform -translate-x-1/2 -translate-y-1/2
    transition-opacity transition-transform duration-300
    ${hidden ? 'opacity-0' : 'opacity-100'}
    ${linkHovered ? 'opacity-0' : 'opacity-100'}
  `;

  const trailClasses = `
    fixed w-10 h-10 rounded-full pointer-events-none z-40
    bg-red-600 opacity-10
    transform -translate-x-1/2 -translate-y-1/2
    transition-opacity duration-500 ease-out
  `;

  return (
    <>
      <div 
        className={cursorClasses} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={cursorDotClasses} 
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={trailClasses} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transition: 'left 0.5s ease-out, top 0.5s ease-out' 
        }}
      />
    </>
  );
};

export default Cursor;