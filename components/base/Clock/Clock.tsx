import React, { useEffect, useState } from "react";

import styles from "./Clock.module.css";

export default function Clock() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    setInterval(() => setClock(new Date()), 1000);
  }, [setClock]);

  return (
    <aside className={styles.root}>
      <div className={styles.clock}>{clock.toLocaleTimeString()}</div>
    </aside>
  );
}
