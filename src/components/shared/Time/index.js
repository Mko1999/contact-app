import React, { useState, useEffect } from "react";
import styles from "./Time.module.scss";

const Time = ({ hour, minute }) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateState(new Date(), 3000);
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  const date = dateState.toLocaleString("en-US", {
    hour: hour,
    minute: minute,
    hour12: true,
  });

  return (
    <div className={styles.time}>
      <p>{date}</p>
    </div>
  );
};

export default Time;
