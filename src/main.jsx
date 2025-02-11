
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter ,RouterProvider} from "react-router-dom";
import App from './App.jsx'
import Error from './Components/Error.jsx';

import Contact from './Components/Contact.jsx';
import Home from './Components/Home.jsx';
import BookDetails from './Components/BookDetails.jsx';
import AddBook from './Components/AddBook.jsx';
import BrowseBooks from './Components/BrowseBooks.jsx';


const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/books/:category",
        element:<BrowseBooks/>,

    },
    {
      path:"/Home",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>,

  },
  {
    path:"/books/:category/:id",
    element:<BookDetails/>
  

  },
  {  //no /book/space :id or /id  it should be /:id 
    path:"/books/category/:id",
    element:<BookDetails/>
  },

  {
    path:"/addBook",
    element:<AddBook/>
  },
  {
    path:"/browsebooks",
    element:<BrowseBooks/>
  }


  ],
    errorElement:<Error/>,
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router ={appRouter} />
)
