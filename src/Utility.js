import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Automatically scrolls to top whenever pathname changes
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
