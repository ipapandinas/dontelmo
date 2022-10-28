import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import alien from "../../assets/alien.svg";

import SlickSlider from "../SlickSlider/SlickSlider";

import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.root}>
      <div className={styles.tag}>
        <Link href="/" title="Homepage" className={styles.logo}>
          <Image
            alt="DON TELMO's avatar"
            height="40px"
            width="40px"
            src={alien}
            layout="fixed"
            title="DON TELMO's avatar"
          />
        </Link>
        <div className={styles.pathWrapper}>
          <span className={styles.pathPrefix}>DON</span>
          <div>
            <span className={styles.telmo}>TELMO</span>
            <span className={styles.path}>{` ( C:\\${
              router.pathname.substring(1) || "..."
            } )`}</span>
          </div>
          <div className={styles.rainbow}>
            <div className="green" style={{ backgroundColor: "#62ba49" }} />
            <div className="yellow" style={{ backgroundColor: "#fdb829" }} />
            <div className="orange" style={{ backgroundColor: "#f6821f" }} />
            <div className="red" style={{ backgroundColor: "#df393d" }} />
            <div className="purple" style={{ backgroundColor: "#973d97" }} />
            <div className="lightblue" style={{ backgroundColor: "#009ddc" }} />
          </div>
        </div>
      </div>

      {router.pathname !== "/" && (
        <div className={styles.slider}>
          <SlickSlider />
        </div>
      )}
    </header>
  );
}
