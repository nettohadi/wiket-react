import './assets/fonts/fonts.css';
import './App.css';
import NavBar from "./components/NavBar";
import Section1 from "./components/Section1";
import FloatingCardsMobile from "./components/FloatingCardsMobile";


function App() {
  return (
    <main>
        <NavBar/>
        <Section1/>
        <FloatingCardsMobile/>
    </main>
  );
}

export default App;
