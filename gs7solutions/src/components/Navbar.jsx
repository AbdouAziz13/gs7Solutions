import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";
import logo from "../assets/img/logo.jpg";
import fr from "../assets/icons/France.svg";
import en from "../assets/icons/us.svg";


function NavScrollExample() {
  const { t, i18n } = useTranslation();

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };


 
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navbar-link me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/" className="link">
              {t("Accueil")}
            </Nav.Link>
            <NavDropdown title={t("L'entreprise")} id="navbarScrollingDropdown" className="link custom-link">
              <NavDropdown.Item href="/entreprise" className="link">
                {t("L'entreprise")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/entreprise/historique" className="link">
                {t("Historique de la société GS7S")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/entreprise/nos-metiers" className="link">
                {t("Nos métiers")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/entreprise/notre-demarche" className="link">
                {t("Notre démarche")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/entreprise/equipe" className="link">
                {t("L'équipe")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/entreprise/organigramme" className="link">
                {t("Organigramme")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Domaines")} id="navbarScrollingDropdown" className="link">
              <NavDropdown.Item href="/domaines" className="link">
                {t("Domaines")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/analyse-strategique-securitaire" className="link">
                {t("Relations Internationales – Sécurité – Maintien de la paix – Stratégies")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/organisation" className="link">
                {t("Organisation et réforme du secteur de la sécurité")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/ressources-humaines" className="link">
                {t("Ressources Humaines")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/enforcement-des-competence" className="link">
                {t("Leadership")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/finances" className="link">
                {t("Finances/Budget")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/logistique-equipements" className="link">
                {t("Logistique/Équipements")}
              </NavDropdown.Item>
              <NavDropdown.Item href="/domaines/informatique" className="link">
                {t("Informatique")}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/activites" className="link">
              {t("Activités")}
            </Nav.Link>
            <Nav.Link href="/cibles-partenaires" className="link">
              {t("Cibles et Partenaires")}
            </Nav.Link>
            <Nav.Link href="/publications" className="link">
              {t("Publications")}
            </Nav.Link>
            <Nav.Link href="/news-presse" className="link">
              {t("News presse")}
            </Nav.Link>
            <Nav.Link href="/evenement" className="link">
              {t("Événements")}
            </Nav.Link>
            <Nav.Link href="/nous-contacter" className="link">
              {t("Nous contacter")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="traduction">
          <ul>
            <li>
              <img src={fr} alt="" onClick={() => handleChangeLng("fr")} />
              <span>FR</span>
            </li>
            <li>
              <img src={en} alt="" onClick={() => handleChangeLng("en")} />
              <span>EN</span>
            </li>
          </ul>
          <div id="google_translate_element" className="bg-blue-300 h-[100px] bg-no-repeat"></div>

        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
