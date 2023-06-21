import './App.css';
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import Slider from './components/Slider/Slider';
import Products from './components/Products/Products';
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Slider/>
     <Products/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}

export default App;
