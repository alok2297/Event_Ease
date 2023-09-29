import './header.css';
import './components/Header';
import Header from './components/Header';
import HeroSection from './components/MainActivity/HeroSection';
import CitiesPopup from './components/MainActivity/CitiesPopup';

function App(){
    return (
        <div>
           <Header/>
           <HeroSection/>
        </div>
    )
}
export default App;