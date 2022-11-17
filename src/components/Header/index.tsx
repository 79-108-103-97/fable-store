import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="./img/icons/logo.svg" alt="FABLE" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>КОЛЛЕКЦИИ</li>
          <li>КОНСТРУКТОР</li>
          <li>SALE</li>
        </ul>
        <ul>
          <li>КОРЗИНА</li>
          <li>АККАУНТ</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
