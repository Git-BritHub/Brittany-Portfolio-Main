import ReactDOM from 'react-dom/client'

// Import React router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Import views/pages for router
import App from './App';
import Error from './views/Error';
import AboutMe from './views/AboutMe';
import ContactMe from './views/ContactMe';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';

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
        path: 'portfolio',
        element: <Portfolio />
      },
      {
        path: 'contactme',
        element: <ContactMe />
      },
      {
        path: 'resume',
        element: <Resume />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
