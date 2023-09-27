"use client";

import { AiOutlineClose } from "react-icons/ai";
import styles from "./navbar.module.css";
import HamburgerBars from "./HamburgerBars";

type Props = {
  nav: boolean;
  activeWord: string;
  searchWord: string[];
  setNav: (nav: boolean) => void;
  handleClickWord: (word: string) => void;
};

export default function NavBar({
  nav,
  setNav,
  activeWord,
  searchWord,
  handleClickWord,
}: Props) {
  const toggleNav = () => setNav(!nav);

  return (
    <>
      {/* HAMBURGER BARS */}
      <HamburgerBars nav={nav} toggleNav={toggleNav} />

      {/* ANIMATED SIDE BAR */}
      <nav
        className={`${styles.innerwrapper} ${
          nav ? styles.slideIn : styles.slideOut
        }`}
      >
        <div className={styles.iconclose} onClick={toggleNav}>
          <AiOutlineClose size="25" color="#C3C3C3" />
        </div>

        <div className={styles.sidebar}>
          <div>
            <h2 className={styles.title}>Search History</h2>
            <div className={styles.content}>
              {searchWord.map((word: string, index: number) => (
                <p
                  key={index}
                  className={`${styles.word} ${
                    activeWord === word ? styles.active : ""
                  }`}
                  onClick={() => handleClickWord(word)}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
