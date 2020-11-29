import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import classes from './App.css';
import ContentPrincipal from "./components/ContentPrincipal/ContentPrincipal";
import GreenSection from "./components/GreenSection/GreenSection";
import Formular from "./components/Formular/Formular";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Backdrop from "./components/Overlay/Backdrop/Backdrop";

const App = () => (
    <div className={classes.App}>
        <Backdrop />
        <Toolbar />
        <ContentPrincipal />
        <GreenSection />
        <Formular />
        <SocialMedia />
    </div>
);

export default App;