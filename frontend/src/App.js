import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Accueil from './components/Accueil/Accueil';
import Clinique from './components/clinique/Clinique';
import Equipe from './components/equipe/Equipe';
import Traitements from './components/traitements/Traitements';
import Contact from './components/contact/Contact';
import Docteur1 from './components/equipe/docteurs/Docteur1';
import Docteur2 from './components/equipe/docteurs/Docteur2';
import Docteur3 from './components/equipe/docteurs/Docteur3';
import Docteur4 from './components/equipe/docteurs/Docteur4';
import Docteur5 from './components/equipe/docteurs/Docteur5';
import Docteur6 from './components/equipe/docteurs/Docteur6';
import ScrollToTop from './ScrollToTop'; // Import ScrollToTop

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

// Ajouter le script Jotform via useEffect
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
  script.async = true;
  document.body.appendChild(script);

  script.onload = () => {
    window.AgentInitializer.init({
      agentRenderURL: "https://eu.jotform.com/agent/0194c8df2d967c3994d8fc231facf9a8db4e", // URL mise à jour
      rootId: "JotformAgent-0194c8df2d967c3994d8fc231facf9a8db4e", // ID mis à jour
      formID: "0194c8df2d967c3994d8fc231facf9a8db4e", // formID mis à jour
      queryParams: ["skipWelcome=1", "maximizable=1"],
      domain: "https://eu.jotform.com",
      isInitialOpen: false,
      isDraggable: false,
      background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)", // Fond mis à jour
      buttonBackgroundColor: "#0a1551", // Couleur du bouton mise à jour
      buttonIconColor: "#fff", // Couleur de l'icône du bouton mise à jour
      variant: false,
      customizations: {
        greeting: "No",
        greetingMessage: "Welcome to Excellence Dental Center\nBienvenue au Excellence Centre Dentaire\nمرحب",
        openByDefault: "No",
        pulse: "Yes",
        position: "right",
      },
      isVoice: false,
    });
  };

  // Nettoyage du script lors du démontage du composant
  return () => {
    document.body.removeChild(script);
  };
}, []);
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <div className="App" >
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil feedbacks={feedbacks} />} />
          <Route path="/clinique" element={<Clinique />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/traitements" element={<Traitements />} />
          <Route path="/contact" element={<Contact onAddFeedback={addFeedback} />} />
          <Route path="/docteurs/docteur1" element={<Docteur1 />} />
          <Route path="/docteurs/docteur2" element={<Docteur2 />} />
          <Route path="/docteurs/docteur3" element={<Docteur3 />} />
          <Route path="/docteurs/docteur4" element={<Docteur4 />} />
          <Route path="/docteurs/docteur5" element={<Docteur5 />} />
          <Route path="/docteurs/docteur6" element={<Docteur6 />} />
        </Routes>

        {/* Div pour afficher le chatbot Jotform */}
        <div id="JotformAgent-0194c8b6e5087e76bffd5df32a1da4d6f101"></div>
      </div>
    </Router>
  );
}

export default App;
