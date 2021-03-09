import styles from '../styles/components/SideBar.module.css';

export function SideBar() {
  return(
    <div className={styles.SideBarContainer}>
          <div className={styles.img}>
            <img src="icons/logo.svg" alt="Logo"/>
          </div>
          <div className={styles.navs}>
            <nav>
              <a href="#">
                <img className={styles.blueFilter} src="icons/home.svg" alt="Home"/>
              </a>
              <a href="#">
                <img className={styles.blueFilter} src="icons/reanking.svg" alt="Reanking"/>
              </a>
            </nav>
          </div>
    </div>
  );
}