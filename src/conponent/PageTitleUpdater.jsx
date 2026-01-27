import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Web'; // Default title

    switch (path) {
      case '/':
        title = 'Home';
        break;
      case '/project':
        title = 'Start a Project';
        break;
      case '/ourcompany':
        title = 'Our Company';
        break;
      case '/ourexperties':
        title = 'Our Expertise';
        break;
      case '/services':
        title = 'Services';
        break;
      default:
        // Capitalize and format other routes if necessary, or leave as default
        if (path.length > 1) {
            title = path.substring(1).charAt(0).toUpperCase() + path.substring(2);
        }
        break;
    }

    document.title = title;
  }, [location]);

  return null;
};

export default PageTitleUpdater;
