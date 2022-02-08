import React, { useState, useEffect } from "react";
import styles from "./time.module.scss";

const Time = () => {
  useEffect(() => {
    setInterval(() => setDateState(new Date(), 3000));
  }, []);

  const [dateState, setDateState] = useState(new Date());

  return (
    <div className={styles.time}>
      <p>
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </div>
  );
};

export default Time;
