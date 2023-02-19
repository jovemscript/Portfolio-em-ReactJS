import Container from "../Container/Container";
import styles from "./Menu.module.css";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-scroll";

function Menu() {

    const [showMenu, setShowMenu] = useState(false);
  
    function toggleMenu() {
      setShowMenu(!showMenu);
    }
  

  AOS.init();

  return (
    <header data-aos="fade-down" className={styles.MenuContainer}>
      <Container>
        <nav className={styles.MenuDesk}>
          <img className={styles.Logo} src="../../../src/assets/imagens/logo.png" />
          <ul>
            <li>
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="outros_conhecimentos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Outros Conhecimentos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="formacao"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Formação
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.MenuMobile}>
          <div className={styles.headerMobile}>
          <img className={styles.Logo} src="https://i.ibb.co/LJKvtSq/logo.png" />
          <img
            className={styles.Hamburger}
            src="https://i.ibb.co/rct1qLP/hamburguer.png"
            alt="Menu"
            onClick={toggleMenu}
          />
          </div>
          {showMenu && (
          <ul>
            <li>
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projetos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="outros_conhecimentos"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Outros Conhecimentos
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="formacao"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Formação
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={50}
                duration={1800}
              >
                Contato
              </Link>
            </li>
          </ul>
           )}
        </nav>
        </Container>
    </header>
    
  );
}

export default Menu;