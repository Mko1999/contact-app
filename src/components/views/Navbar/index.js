import React from "react";
import styles from "./Navbar.module.scss";
import { BatteryHalf, Wifi } from "react-bootstrap-icons";
import { Time } from "../../shared";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Time hour ="numeric" minute = "numeric"/>
        <div className={styles.navbar__icons}>
          <Wifi color="#000" size="18" className={styles.navbar__icons__wifi} />
          <BatteryHalf
            color="#000"
            size="18"
            className={styles.navbar__icons__battery}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
