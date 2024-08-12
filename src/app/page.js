'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Banner from '../../public/banner.jpg';
import Logo from '../../public/logo.png';
import { useState } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (

    <div className={isDarkMode ? styles.dark_mode : styles.light_mode}>
      
      <header className={styles.header_container}>

        <div>
          <Image src={Logo} alt="Logomarca" />
          <button onClick={changeMode}> {isDarkMode ? <FiSun /> : <FiMoon />}</button>
        </div>

      </header>

      <main className={styles.main_container}>

        <section className={styles.section_banner}>
          <Image src={Banner} alt='banner' />
        </section>  

        <section className={styles.section_text}>
          <div>
            <h1>Bem-vindo a Barber Shop Hook Roots</h1>
            <p>
              Nossa barbearia sempre oferece profissionais de qualidade e
              estamos prontos para lidar com suas maiores expectativas.
            </p>
            <p>
              Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos
              uma equipe premiada que demonstrou o talento de mestres barbeiros
              em vários concursos de estilo. Deixe nosso barbeiro ser seu
              estilista pessoal e você nunca ficará desapontado.
            </p>
            <p className={styles.signature}>S. Kelly</p>
          </div>
        </section>
      </main>

    </div>    
  );
}
