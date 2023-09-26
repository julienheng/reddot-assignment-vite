"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <>
      <div className={styles.navbar}>
        {!nav && (
          <div className={styles.navwrapper}>
            <AiOutlineMenu
              size="25"
              color="#C3C3C3"
              onClick={() => setNav(!nav)}
            />
          </div>
        )}
      </div>

      {nav && (
        <nav className={`${styles.innerwrapper}`} onClick={() => setNav(!nav)}>
          <div className={styles.iconclose}>
            <AiOutlineClose size="25" color="#C3C3C3" />
          </div>
        </nav>
      )}
    </>
  );
}
