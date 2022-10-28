import React from "react";
import Link from "next/link";

import { NAV_MENU } from "../../../utils/constants";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={`${styles.root} fade-in`}>
      <div className={styles.menu}>
        {NAV_MENU.map(({ href, label, title }) => (
          <Link key={href} href={href} title={title} passHref>
            <a
              className={styles.button}
              title={title}
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.text}>Each page presents an aspect of my work</div>
      <div className={styles.tag}>
        DON TELMO
        <br />
        WEB INVASION EXP.
      </div>
    </div>
  );
}
