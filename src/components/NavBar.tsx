"use client";

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./navbar.module.css";

type Props = {
  searchWord: string[];
  handleClickWord: (word: string) => void;
};

export default function NavBar({ searchWord, handleClickWord }: Props) {
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
        <nav
          className={`${nav ? styles.innerwrapper : styles.out}`}
          onClick={() => setNav(!nav)}
        >
          <div className={styles.iconclose}>
            <AiOutlineClose size="25" color="#C3C3C3" />
          </div>

          <div className={styles.sidebar}>
            <div>
              <h2 className={styles.title}>Search History</h2>
              <div className={styles.content}>
                {searchWord.map((word: string, index: number) => (
                  <p
                    key={index}
                    className={styles.word}
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
