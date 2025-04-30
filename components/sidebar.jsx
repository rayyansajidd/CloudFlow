import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconGroup}>
        <img src="/Geometry.png" className={styles.icon} alt="Logo" />
        <img src="/Horizontal Line.png" className={styles.icon} alt="Logo" />
        <img src="/Search Folder.png" className={styles.icon} alt="Search" />
        <img src="/testnet.png" className={styles.icon} alt="Add" />
        <img src="/Clock.png" className={styles.icon} alt="Grid" />
        <img src="/Pulse.png" className={styles.icon} alt="Time" />
        <img src="/Computer Support.png" className={styles.icon} alt="Monitor" />
      </div>
      <div className={styles.bottomIconGroup}>
        <div className={styles.bottomIcon}>
          <img src="/Help.png" className={styles.icon} alt="Icon1" />
        </div>
        <img src="/Horizontal Line.png" className={styles.icon} alt="Logo" />
        <div className={styles.bottomIcon}>
          <img src="/Small Business.png" className={styles.icon} alt="Icon2" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;