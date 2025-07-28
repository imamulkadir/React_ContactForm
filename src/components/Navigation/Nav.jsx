import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className={styles.logo}>
        <img src="/images/logo.png" width="72px" alt="logo image" />
      </div>

      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Nav;
