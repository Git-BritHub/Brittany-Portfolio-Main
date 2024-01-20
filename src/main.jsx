import ReactDOM from 'react-dom/client'

// Import React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import views/pages for router
import App from './App';
import Error from './views/Error/Error';
import AboutMe from './views/AboutMe/AboutMe';
import ContactMe from './views/ContactMe/ContactMe';
import Portfolio from './views/Portfolio/Portfolio';
import Resume from './views/Resume/Resume';

// Defined routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />
      },
      {
        path: 'Portfolio',
        element: <Portfolio />
      },
      {
        path: 'ContactMe',
        element: <ContactMe />
      },
      {
        path: 'Resume',
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
