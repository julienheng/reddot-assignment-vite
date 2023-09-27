"use client";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./navbar.module.css";

type Props = {
  nav: boolean;
  activeWord: string;
  searchWord: string[];
  setNav: (nav: boolean) => void;
  handleClickWord: (word: string) => void;
};

export default function NavBar({
  activeWord,
  searchWord,
  handleClickWord,
  nav,
  setNav,
}: Props) {
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
        <nav className={`${styles.innerwrapper} ${nav ? styles.slideIn : styles.slideOut}`}>
          <div className={styles.iconclose} onClick={() => setNav(!nav)}>
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
      )}
    </>
  );
}
