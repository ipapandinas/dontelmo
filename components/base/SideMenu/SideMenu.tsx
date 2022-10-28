import React from "react";
import Link from "next/link";

import { NAV_MENU } from "../../../utils/constants";

import styles from "./SideMenu.module.css";

export default function SideMenu() {
  return (
    <aside className={styles.root}>
      {NAV_MENU.map(({ href, label, title }) => (
        <Link key={href} href={href} title={title} passHref>
          <a className={styles.button} title={title} rel="noopener noreferrer">
            {label}
          </a>
        </Link>
      ))}
    </aside>
  );
}
