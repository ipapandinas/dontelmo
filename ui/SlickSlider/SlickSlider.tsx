"use client";

import React from "react";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import styles from "./SlickSlider.module.css";

export default function SlickSlider() {
  const router = useRouter();
  const pathname = usePathname();

  const sliderSettings = {
    arrows: false,
    // beforeChange: () => {
    //   scroll.scrollToTop();
    // },
    dots: true,
    focusOnSelect: true,
    slidesToShow: 1,
    touchMove: true,
  };

  if (pathname === "/") return null;

  return (
    <div className={styles.root}>
      <Slider
        afterChange={(current) => {
          if (current === 0) router.push("/dev");
          else if (current === 1) router.push("/misc");
          else if (current === 2) router.push("/about");
        }}
        {...sliderSettings}
      >
        <div className={styles.button}>DEV</div>
        <div className={styles.button}>MISC</div>
        <div className={styles.button}>ABOUT</div>
      </Slider>
    </div>
  );
}
