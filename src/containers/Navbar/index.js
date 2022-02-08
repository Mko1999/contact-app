import React from "react";
import styles from "./navbar.module.scss";
import { Wifi } from "react-bootstrap-icons";
import { Battery } from "react-bootstrap-icons";
import { Time } from "..";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Time />
      <div className={styles.navbar__icons}>
        <Wifi color="#000" size="18" />
        <Battery color="#000" size="18" />
      </div>
    </div>
  );
};

export default Navbar;
