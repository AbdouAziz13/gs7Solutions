import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entreprise from "./pages/Entreprise";
import Domaine from "./pages/Domaine";
import Activite from "./pages/Activite";
import CiblePartenaire from "./pages/CiblesPartenaires";
import Publications from "./pages/Publications";
import NewPresse from "./pages/NewPresse";
import Evenement from "./pages/Evenement";
import Contact from "./pages/Contact";
import Historique from "./pages/dropDownPage/Historique";
import Metiers from "./pages/dropDownPage/Metier";
import Demarche from "./pages/dropDownPage/Demarche";
import Equipe from "./pages/dropDownPage/Equipe";
import Organigramme from "./pages/dropDownPage/Organigramme";
import RelationInternational from "./pages/dropDownPage/RelationInternational";
import Organisation from "./pages/dropDownPage/Organisation";
import RessourceH from "./pages/dropDownPage/RessourceH";
import Leadership from "./pages/dropDownPage/Leadership";
import Finance from "./pages/dropDownPage/Finance";
import Logistique from "./pages/dropDownPage/Logistique";
import Informatique from "./pages/dropDownPage/Informatique";
import LoginAdmin from "./admin/pages/LoginAdmin";
import AdminSection from "./admin/pages/AdminSection";
import Medias from "./admin/pages/adminSections/Medias";
import NavbarAdmin from "./admin/pages/adminSections/NavbarAdmin";
import PublicationArticle from "./admin/pages/adminSections/PublicationArticle";
import { PoppupContextProvider } from "./context/PoppupContext";
import { PublicationContextProvider } from "./context/CreatePublicationContext";
import Updatepubliction from "./admin/pages/adminSections/Updatepubliction";
import UnikPublication from "./pages/UnikPublication";
import EventCalendar from "./admin/pages/adminSections/EventCalendar";
import { CalendarContextProvider } from "./context/CalendarContext";
import { authContext } from "./context/AuthContext";
import { useState, useEffect } from "react";
import Unfound from "./pages/Unfound";
import ScrollToTop from "./components/ScrollToTop";
AOS.init();

// sous menu

function App() {

  // state toujours dispo
  
  return (
    <div className="App">
     
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <CalendarContextProvider>
                    <HomePage />
                  </CalendarContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/entreprise"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Entreprise />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines"
              element={
                <>
                  <Navbar />
                  <Domaine />
                  <Footer />
                </>
              }
            />
            <Route
              path="/activites"
              element={
                <>
                  <Navbar />
                  <Activite />
                  <Footer />
                </>
              }
            />
            <Route
              path="/cibles-partenaires"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <CiblePartenaire />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/publications"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Publications />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/news-presse"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <NewPresse />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/evenement"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Evenement />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/nous-contacter"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Contact />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <Unfound />
                </>
              }
            />
            {/* sous menu */}
            <Route
              path="/entreprise/historique"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Historique />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/entreprise/nos-metiers"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Metiers />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/entreprise/notre-demarche"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Demarche />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/entreprise/equipe"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Equipe />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/entreprise/organigramme"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Organigramme />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/analyse-strategique-securitaire"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <RelationInternational />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />

            <Route
              path="/domaines/organisation"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Organisation />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/ressources-humaines"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <RessourceH />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/enforcement-des-competence"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Leadership />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/finances"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Finance />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/logistique-equipements"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Logistique />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />
            <Route
              path="/domaines/informatique"
              element={
                <>
                  <Navbar />
                  <PublicationContextProvider>
                    <Informatique />
                  </PublicationContextProvider>
                  <Footer />
                </>
              }
            />

            {/* partie administrateur */}

            <Route path="/auth/admin" element={<LoginAdmin />} />

            {/* admin section */}
          
              <>
                <Route path="/auth/admin-section" element={<AdminSection />} />
                <Route
                  path="/auth/admin-section/media"
                  element={
                    <>
                      <PoppupContextProvider>
                        <NavbarAdmin />
                        <Medias />
                      </PoppupContextProvider>
                    </>
                  }
                />
                <Route
                  path="/auth/admin-section/publications"
                  element={
                    <>
                      <PublicationContextProvider>
                        <NavbarAdmin />
                        <PublicationArticle />
                      </PublicationContextProvider>
                    </>
                  }
                />
                <Route
                  path="/auth/admin-section/publications/:id"
                  element={
                    <>
                      <PublicationContextProvider>
                        <Updatepubliction />
                      </PublicationContextProvider>
                    </>
                  }
                />

                <Route
                  path="/publications/:urlArticle"
                  element={
                    <>
                      <Navbar />
                      <PublicationContextProvider>
                        <UnikPublication />
                      </PublicationContextProvider>
                    </>
                  }
                />

                {/* calendar */}
                <Route
                  path="/auth/admin/calendar"
                  element={
                    <>
                      <NavbarAdmin />
                      <CalendarContextProvider>
                        <EventCalendar />
                      </CalendarContextProvider>
                    </>
                  }
                />
              </>
            
          </Routes>
          {/* end admin section */}
        </Router>
  
    </div>
  );
}

export default App;
