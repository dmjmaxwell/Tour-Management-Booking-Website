import { Routes, Route } from 'react-router-dom'
import "./App.css";
import Layout from './components/Layout/Layout';
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Thankyou from './pages/ThankYou';
import SearchResultList from './pages/SearchResultList';


function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path='/home' element={<Home />} />  
        <Route path='/tours' element = {<Tours />} />
        <Route path='/tours/:id' element = {<TourDetails/>} />
        <Route path='/login' element = {<Login/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/thank-you' element = {<Thankyou/>} />
        <Route path='/tours/search' element = {<SearchResultList/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
