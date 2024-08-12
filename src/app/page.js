import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = use useState(false);

  return (

    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}></div>


    <main className={styles.main}>
      
    </main>

    <section className={styles.section_text}>

      <div>
        <h1>Bem-vindo a Barber Shop Hook Roots</h1>
        
      </div>

    </section>
  );
}
