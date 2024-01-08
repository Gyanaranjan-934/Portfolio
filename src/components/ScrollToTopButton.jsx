// ScrollToTopButton.jsx

import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isScrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed
      const scrollThreshold = 100;
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollThreshold) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  return isScrollVisible && (
    <ScrollLink to="header" smooth={true} duration={500} className="cursor-pointer fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition">
      <FaArrowUp />
    </ScrollLink>
  );
};

export default ScrollToTopButton;
