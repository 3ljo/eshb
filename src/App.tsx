import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import '../src/css/line-awesome.min.css';
import '../src/css/iconoir.css';
import '../src/css/fontawesome.min.css';
import '../src/css/animate.min.css';

import '../src/css/aixor-unit-test.css';
import '../src/css/style.css';
import '../src/css/responsive.css';

import Routers from "./Routers";
import { ToastContainer } from 'react-toastify';
import Dependency from './components/utilities/Dependency';
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop';
import { useEffect, useState } from 'react';
import Preloader from './components/utilities/Preloader';
import { LanguageProvider } from './context/LanguageContext';

function App() {

  //  Preloader
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <LanguageProvider>
      {isLoading ? <Preloader /> :
        <>
          <Routers />
          <RoutesScrollToTop />
          <ToastContainer />
          <Dependency />
        </>
      }
    </LanguageProvider>
  )
}

export default App


