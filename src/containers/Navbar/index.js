import React from "react";
import styles from "./navbar.module.scss";
import { BatteryHalf, Wifi } from "react-bootstrap-icons";
import { Time } from "..";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Time />
      <div className={styles.navbar__icons}>
        <Wifi color="#000" size="18" className={styles.navbar__icons__wifi} />
        <BatteryHalf
          color="#000"
          size="18"
          className={styles.navbar__icons__battery}
        />
      </div>
    </div>
  );
};

export default Navbar;
