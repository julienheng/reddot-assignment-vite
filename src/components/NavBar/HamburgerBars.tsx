"use client";

import styles from "./hamburger-bars.module.css";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {
  nav: boolean;
  toggleNav: () => void;
};

export default function HamburgerBars({ nav, toggleNav }: Props) {
  return (
    <div className={styles.navbar}>
      {!nav && (
        <div className={styles.navwrapper}>
          <AiOutlineMenu size="25" color="#C3C3C3" onClick={toggleNav} />
        </div>
      )}
    </div>
  );
}
