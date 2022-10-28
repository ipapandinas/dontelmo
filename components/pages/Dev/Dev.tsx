import React from "react";
import Image from "next/image";

import { PORTFOLIO } from "../../../utils/constants";

import styles from "./Dev.module.css";

export default function Dev() {
  return (
    <div className={`${styles.root} fade-in`}>
      <div className={styles.button}>RESUME</div>
      <p className={styles.text}>
        Some of the projects I worked on.
        <br />
        <br />I am always trying to balance creativity with technology.
      </p>
      <div className={styles.portfolio}>
        {PORTFOLIO.map(
          ({
            _id,
            colors,
            description,
            height,
            href,
            label,
            logo,
            prefix,
            title,
            width,
          }) => (
            <div key={_id} className={styles.project}>
              <a
                className={styles.projectAvatar}
                href={href}
                title={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.projectLogo}
                  alt={`${label}'s logo`}
                  src={logo}
                  width={width || "40px"}
                  height={height || "40px"}
                />
                <div className={styles.projectName}>
                  {prefix && (
                    <span className={styles.projectPrefix}>{prefix}</span>
                  )}
                  <span className={styles.projectLabel}>{label}</span>
                  <div className={styles.projectColor}>
                    {colors.map((color) => (
                      <div
                        className="color"
                        key={color}
                        style={{
                          backgroundColor: color,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </a>
              <p className={styles.projectDescription}>{description}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
