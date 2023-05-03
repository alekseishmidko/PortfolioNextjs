import { Link } from "react-scroll";
import styles from "../../../portfolio//src/styles/header.module.scss";
import Logo from "../Logo/Logo";
import { useMediaQuery } from "../../hooks";
import React from "react";
import stylesMenu from "../../../portfolio//src/styles/mobileMenu.module.scss";

const Header = () => {
  const isMobile = useMediaQuery(640);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const spy = true;
  const smooth = true;
  const offset = 140;
  const duration = 500;
  const currentMenuItemClass = isMobile
    ? stylesMenu.menu__item
    : styles.header__nav__list__item;
  const handleToggleMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.toggle(
      "overflow-hidden"
    );
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    (document.querySelector("body") as HTMLBodyElement).classList.remove(
      "overflow-hidden"
    );
    setMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__container}></div>
      <Logo />
      {isMobile && (
        <button
          className={`${styles.burger_menu}${menuOpen ? styles.open : ""}`}
          onClick={handleToggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      <nav
        className={`${isMobile ? stylesMenu.menu : styles.header__nav}${
          menuOpen ? stylesMenu.open : ""
        }`}
      >
        <ul
          className={`${
            isMobile ? styles.list_reset : styles.header__nav__list
          }`}
        >
          <li className={currentMenuItemClass}>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="about"
              spy={spy}
              smooth={smooth}
              offset={offset}
              duration={duration}
            >
              {" "}
              Обо мне
            </Link>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="scills"
              spy={spy}
              smooth={smooth}
              offset={offset}
              duration={duration}
            >
              {" "}
              Навыки
            </Link>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="portfolio"
              spy={spy}
              smooth={smooth}
              offset={offset}
              duration={duration}
            >
              {" "}
              Портфолио
            </Link>
            <Link
              className={styles.header__nav__list__item__link}
              href="/"
              to="back "
              spy={spy}
              smooth={smooth}
              offset={offset}
              duration={duration}
            >
              {" "}
              Обратная связь
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
