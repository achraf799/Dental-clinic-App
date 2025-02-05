import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";
import Clinique from "./components/clinique/Clinique";
import Equipe from "./components/equipe/Equipe";
import Traitements from "./components/traitements/Traitements";
import Contact from "./components/contact/Contact";
import Docteur1 from "./components/equipe/docteurs/Docteur1";
import Docteur2 from "./components/equipe/docteurs/Docteur2";
import Docteur3 from "./components/equipe/docteurs/Docteur3";
import Docteur4 from "./components/equipe/docteurs/Docteur4";
import Docteur5 from "./components/equipe/docteurs/Docteur5";
import Docteur6 from "./components/equipe/docteurs/Docteur6";
import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
import { Helmet } from "react-helmet"; // Import Helmet

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };

  // Ajouter le script Jotform via useEffect
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.AgentInitializer.init({
        agentRenderURL:
          "https://eu.jotform.com/agent/0194c8df2d967c3994d8fc231facf9a8db4e", // URL mise à jour
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
          greetingMessage:
            "Welcome to Excellence Dental Center\nBienvenue au Excellence Centre Dentaire\nمرحب",
          openByDefault: "No",
          pulse: "Yes",
          position: "right",
          buttonSize: "65px",
          width: "65px",
          height: "65px",
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
      <Helmet>
        {/* Global site-wide meta tags */}
        <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />
    <meta name="description"
      content="Bienvenue à Excellence Centre Dentaire, votre clinique dentaire de confiance. Nous offrons une gamme complète de soins dentaires de qualité supérieure pour toute la famille, dentiste N'gaous Batna Algerie" />
    <meta name="keywords"
      content="dentiste setif ,dentiste Algerie ,dentiste ngaous , dentiste n'gaous, dentiste Batna, Khaled harous, Khaled dentiste, dentiste, soins dentaires, orthodontie, implants, esthétique dentaire, chirurgie orale, blanchiment, hygiène dentaire, urgence dentaire, Algérie" />
    <meta name="robots" content="index, follow" />

    <title>Excellence Centre Dentaire - Votre Clinique Dentaire en
      Algérie</title>
    <link rel="icon" type="image/png" href="%PUBLIC_URL%/ecd-logo.png" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <meta property="og:title"
      content="Excellence Centre Dentaire - Dentiste à N'gaous, Batna, Algérie" />
    <meta property="og:description"
      content="Votre clinique dentaire spécialisée en soins dentaires, orthodontie, implants et urgences dentaires en Algérie. Contactez-nous au 0663 53 52 52." />
    <meta property="og:image"
      content="https://www.excellencecentredentaire.com/images/clinic.jpg" />
    <meta property="og:url"
      content="https://www.excellencecentredentaire.com" />
    <meta property="og:type" content="website" />
    <meta property="og:location"
      content="https://www.google.com/maps/place/EXCELLENCE+centre+dentaire/@35.5534458,5.6058517,17z/data=!4m6!3m5!1s0x12f48f7f30de532d:0x72e472485b169e53!8m2!3d35.5534458!4d5.6085307!16s%2Fg%2F11rfsbk5q6?coh=225993&entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D" />
    <meta property="business:contact_data:phone_number" content="0663535252" />
    <meta property="business:contact_data:locality"
      content="N'gaous, Batna, Algérie" />

    <meta property="og:location"
      content="https://www.google.com/maps/place/EXCELLENCE+centre+dentaire/@35.5534458,5.6058517,17z/data=!4m6!3m5!1s0x12f48f7f30de532d:0x72e472485b169e53!8m2!3d35.5534458!4d5.6085307!16s%2Fg%2F11rfsbk5q6?coh=225993&entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D" />
    <meta property="og:instagram"
      content="https://www.instagram.com/excellencecentredentaire/" />
    <meta property="og:facebook"
      content="https://www.facebook.com/excellencecentredentaire/" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ExcellenceCentreDental" />
    <meta name="twitter:title"
      content="Excellence Centre Dentaire - Dentiste à N'gaous, Batna" />
    <meta name="twitter:description"
      content="Clinique dentaire de qualité offrant des soins dentaires, orthodontie, implants et urgences en Algérie." />
    <meta name="twitter:image"
      content="https://www.excellencecentredentaire.com/images/clinic.jpg" />
      <script type="application/ld+json">
    {`
      "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Excellence Centre Dentaire",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "N'gaous Batna Setif Ainezel Merouana, Aintouta",
      "addressLocality": "N'gaous",
      "addressRegion": "Batna",
      "postalCode": "05000",
      "addressCountry": "DZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.5534458",
      "longitude": "5.6085307"
    },
    "telephone": "+213663535252",
    "url": "https://www.excellencecentredentaire.com"
  };
    `}
  </script>
      </Helmet>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil feedbacks={feedbacks} />} />
          <Route path="/clinique" element={<Clinique />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/traitements" element={<Traitements />} />
          <Route
            path="/contact"
            element={<Contact onAddFeedback={addFeedback} />}
          />
          <Route path="/docteurs/docteur1" element={<Docteur1 />} />
          <Route path="/docteurs/docteur2" element={<Docteur2 />} />
          <Route path="/docteurs/docteur3" element={<Docteur3 />} />
          <Route path="/docteurs/docteur4" element={<Docteur4 />} />
          <Route path="/docteurs/docteur5" element={<Docteur5 />} />
          <Route path="/docteurs/docteur6" element={<Docteur6 />} />
        </Routes>

        {/* Div pour afficher le chatbot Jotform */}
        <div className="chatbot-btn"
          id="JotformAgent-0194c8b6e5087e76bffd5df32a1da4d6f101"
        ></div>
        <a
          href="https://wa.me/213663535252"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whatsapp-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
            >
              <circle
                cx="27.5"
                cy="27.5"
                r="27.5"
                fill="#F0F0F0"
                fill-opacity="0.81"
              />
              <path
                d="M27.4997 9.93994C17.8021 9.93994 9.93945 17.8025 9.93945 27.5002C9.93945 30.7945 10.8648 33.8659 12.4432 36.5004L10.0966 45.0604L18.8396 42.7654C21.3966 44.2191 24.3483 45.0604 27.4997 45.0604C37.1973 45.0604 45.0599 37.1978 45.0599 27.5002C45.0599 17.8025 37.1973 9.93994 27.4997 9.93994ZM21.4891 19.3088C21.7744 19.3088 22.0676 19.3071 22.3208 19.3203C22.634 19.3276 22.9748 19.3505 23.3011 20.0719C23.6889 20.9295 24.5333 23.0807 24.6416 23.2988C24.7499 23.5168 24.8266 23.7737 24.6759 24.059C24.5325 24.3517 24.4579 24.5288 24.2472 24.7878C24.0291 25.0395 23.7902 25.3521 23.5927 25.5424C23.3746 25.7604 23.1495 25.9995 23.4012 26.4341C23.6529 26.8687 24.527 28.2935 25.8191 29.4437C27.48 30.9275 28.8814 31.3835 29.3175 31.6016C29.7535 31.8196 30.0061 31.7856 30.2578 31.493C30.5168 31.2076 31.3456 30.2285 31.6382 29.7924C31.9236 29.3563 32.2149 29.4318 32.61 29.5752C33.011 29.7186 35.1492 30.7719 35.5853 30.9899C36.0214 31.208 36.3072 31.3159 36.417 31.493C36.5297 31.6759 36.5298 32.5467 36.1683 33.5622C35.8069 34.5763 34.032 35.557 33.2359 35.6258C32.4325 35.7004 31.6828 35.9869 28.0142 34.5426C23.589 32.7997 20.7982 28.2673 20.5802 27.9746C20.3622 27.6893 18.8082 25.6182 18.8082 23.4817C18.8082 21.3379 19.9322 20.288 20.3258 19.8519C20.7268 19.4158 21.1964 19.3088 21.4891 19.3088Z"
                fill="#4AD554"
              />
            </svg>
          </div>
        </a>
        <a
          href="https://www.google.com/maps/place/EXCELLENCE+centre+dentaire/@35.5534458,5.6058517,17z/data=!4m6!3m5!1s0x12f48f7f30de532d:0x72e472485b169e53!8m2!3d35.5534458!4d5.6085307!16s%2Fg%2F11rfsbk5q6?coh=225993&entry=tts&g_ep=EgoyMDI1MDEyMi4wIPu8ASoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="map-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
            >
              <g filter="url(#filter0_d_601_1013)">
                <circle
                  cx="31.5"
                  cy="27.5"
                  r="27.5"
                  fill="#F0F0F0"
                  fill-opacity="0.81"
                />
                <path
                  d="M26.1084 36.4427C27.1411 37.7614 28.081 39.1504 28.9214 40.5997C29.6389 41.9628 29.9379 42.887 30.4623 44.5294C30.7839 45.4368 31.0745 45.7076 31.6993 45.7076C32.3802 45.7076 32.6891 45.2469 32.9278 44.5344C33.4234 42.9834 33.8123 41.7997 34.4259 40.6812C35.6299 38.5219 37.1259 36.6031 38.5959 34.759C38.9938 34.237 41.5668 31.1963 42.7251 28.7971C42.7251 28.7971 44.1488 26.1616 44.1488 22.4808C44.1488 19.0378 42.7448 16.6499 42.7448 16.6499L38.7025 17.7345L36.2477 24.2126L35.6404 25.1058L35.5189 25.2676L35.3574 25.4702L35.0739 25.7938L34.6688 26.1996L32.4828 27.984L27.0175 31.1457L26.1084 36.4427Z"
                  fill="#34A853"
                />
                <path
                  d="M20.4678 28.354C21.8016 31.4066 24.3738 34.09 26.1141 36.4448L35.3575 25.4744C35.3575 25.4744 34.0552 27.1807 31.693 27.1807C29.0618 27.1807 26.9361 25.0755 26.9361 22.421C26.9361 20.6006 28.0292 19.3501 28.0292 19.3501L21.7545 21.0347L20.4678 28.354Z"
                  fill="#FBBC04"
                />
                <path
                  d="M35.4612 10.5039C38.5312 11.4956 41.1588 13.5776 42.7481 16.6478L35.3608 25.4681C35.3608 25.4681 36.4538 24.1949 36.4538 22.3859C36.4538 19.6695 34.1709 17.6403 31.7047 17.6403C29.3726 17.6403 28.0332 19.3438 28.0332 19.3438V13.7871L35.4612 10.5039Z"
                  fill="#4285F4"
                />
                <path
                  d="M22.1611 14.4009C23.9947 12.2029 27.2211 9.93945 31.6692 9.93945C33.8272 9.93945 35.4531 10.5071 35.4531 10.5071L28.0258 19.3484H22.7634L22.1611 14.4009Z"
                  fill="#1A73E8"
                />
                <path
                  d="M20.4683 28.3537C20.4683 28.3537 19.2412 25.946 19.2412 22.458C19.2412 19.1613 20.5203 16.2796 22.1616 14.4009L28.0304 19.3492L20.4683 28.3537Z"
                  fill="#EA4335"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_601_1013"
                  x="0"
                  y="0"
                  width="63"
                  height="63"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.000833639 0 0 0 0 0.620109 0 0 0 0 1 0 0 0 0.67 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_601_1013"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_601_1013"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </a>
      </div>
    </Router>
  );
}

export default App;
