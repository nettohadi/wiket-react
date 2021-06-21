import React from "react";
import './assets/fonts/fonts.css';
import './App.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";
import FloatingCardsMobile from "./components/FloatingCardsMobile";

function App() {
    // const [state, setState] = React.useState(0);
    // const handleClick = () => {
    //     setState(s => s + 1)
    // }

    return (
        <main>
            <Header/>
            <Section1/>
            <FloatingCardsMobile/>
        </main>
    );
}

export default App;
