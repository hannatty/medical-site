import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import header_styles from '../styles/styles.module.scss';
import { Inter } from 'next/font/google';
import ProfessionalIntro from '../components/ProfessionalIntro';
import GrayRectangle from '../components/GrayRectangle';
import SurgeriesCarousel from '../components/SurgeriesCarousel';
import Articles from './Articles';
import { HealthInsurance } from '../components/HealthInsurance';
import { LocationService } from './LocationService';
import cirurgia from '../../public/images/cirurgia.png';
import HeaderName from '../components/HeaderName';
import Widget from '../components/Widget';
import icon_menu from '../../public/icon_menu.png';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <Head>
        <title>Dr. Carlos Alberto Barros | Cirurgião de Cabeça e Pescoço</title>
      </Head>
      <header className={header_styles.headerContainer}>
          <div className={header_styles.headerContent}>
              <nav className={header_styles.nav_bar}>
                  <a className={header_styles.links} onClick={() => scrollToElement("onTop")}> Início </a>
                  <a className={header_styles.links} onClick={() => scrollToElement("formation")}> Formação </a>
                  <a className={header_styles.links} onClick={() => scrollToElement("articles")}> Artigos </a>
                  <a className={header_styles.links} onClick={() => scrollToElement("surgeries")}> Cirurgias </a>
                  <a className={header_styles.links}  onClick={() => scrollToElement("location")}> Contato </a>
              </nav>
          </div>
      </header>
      <div id="onTop" className={styles.header_name_style}>
          <HeaderName />
          <Widget phoneNumber="5581993524086" message="Olá! Gostaria de agendar uma consulta." />
      </div>    
      <main className={styles.principal_container}>
        <ProfessionalIntro />
        <div className={styles.surgeries_container} id="surgeries">
          <SurgeriesCarousel />
        </div>
        <div className={styles.secondary_element} id="formation">
          <GrayRectangle />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <div>
          <HealthInsurance />
        </div>
        <div id="location">
          <LocationService />
        </div>
      </main>
    </>
  )
}
