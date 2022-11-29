
import React from 'react';
import Navbar from './NavBar/navbar.jsx';
import Photocard from './PhotoCard/photocard.jsx';
import Skills from './skills/skills.jsx';
import './App.css';
import ProjectCard from './projectcards/projectcards.jsx';
import Carousel from './Carousel/Carousel.jsx';

function App() {
    return (
        <div className="page">
     
        <Navbar />
       <Photocard />
       <Carousel/>

       </div>
    );
}
export default App;
