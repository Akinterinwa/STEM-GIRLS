import { useEffect } from 'react';
import { useNavigate } from 'react-router'; // If using React Router

function ScrollTop() {
     const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to the top when the component mounts
    scrollHandler();

    // Cleanup function
    return () => {
      // Stop listening for route changes when the component unmounts
    };
  }, [navigate]); // Only re-run the effect if `navigate` changes (e.g., route changes)

  return null; // This component doesn't render anything
}

export default ScrollTop;