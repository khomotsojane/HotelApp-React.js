
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ParentContainer from './components/ParentContainer';
import Home from './components/Home';
import Register from './components/Register';
import Page404 from './components/Page404';
import ForgotPassword from './components/ForgotPassword';
import DoubleB from './components/DoubleB';
import SingleRoom from './components/SingleRoom';
import Payment from './components/Payment';
import About from './components/About';
import Paid from './components/Paid';
// import Contact from './components/Contact';


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ParentContainer/>}>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Forgotpassword" element={<ForgotPassword/>}></Route>
      <Route path="/DoubleB" element={<DoubleB/>}></Route>
      <Route path="/SingleRoom" element={<SingleRoom/>}></Route>
      <Route path="/Payment" element={<Payment/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Paid" element={<Paid/>}></Route>
      {/* <Route path="/Contact" element={<Contact/>}></Route> */}
      <Route path="*" element={<Page404/>}></Route>
      
    </Route>
  )
);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
