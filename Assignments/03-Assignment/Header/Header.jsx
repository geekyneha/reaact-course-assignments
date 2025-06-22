import styles from "./header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img
            src="https://t3.ftcdn.net/jpg/03/44/50/42/360_F_344504282_ZcAnQkzn7yIExLjViiTwk0Zdgy0fDH8d.jpg"
            alt=""
            width={50}
          />
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchBar}
          />
          <button type="submit">🔍</button>
        </div>
        <div className={styles.login}>
          <img
            src="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Header;
