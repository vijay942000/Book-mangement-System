
import Header from "./Components/Header";
import { Provider } from "react-redux";

 
 import Footer from "./Components/Footer";
 import { Outlet } from "react-router-dom";


import library from './utils/library.js'; 



function App(){


    return(<>
   {/* this store will be used in Header,body  */}

   <Provider store={library}> 
    <Header/>

    <Outlet/>
    <Footer/>


     </Provider> 

    


    </>)
}

export default App;