import React from "react";
import './assets/fonts/fonts.css';
import './App.css';
import Header from "./components/Header";
import Section1 from "./components/Section1";
import FloatingCardsMobile from "./components/FloatingCardsMobile";
import {gsap} from "gsap";

function App() {

    const main = React.useRef(null);

    React.useEffect(() => {
        //prevent flickering on initial load
        gsap.to(main.current, {
            css: {visibility: 'visible'},
            delay: .3,
            duration: 0
        });
    });

    return (
        <main ref={main}>
            <Header/>
            <Section1/>
            <FloatingCardsMobile/>
        </main>
    );
}

export default App;
