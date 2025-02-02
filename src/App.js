// App.js
import React, { useState } from 'react';
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
      </div>
    </Router>
  );
}

export default App;
