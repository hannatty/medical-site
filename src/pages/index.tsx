import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';
import header_styles from '../styles/styles.module.scss';
import { Inter } from 'next/font/google';
import GreenRectangle from '../components/GreenRectangle';
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
        <title>Dr. Carlos Alberto Barros</title>
      </Head>
      <>
        <header className={header_styles.headerContainer}>
            <div className={header_styles.headerContent}>
                <nav className={header_styles.nav_bar}>
                    <a className={header_styles.links} onClick={() => scrollToElement("onTop")}> Início </a>
                    <a className={header_styles.links} onClick={() => scrollToElement("formation")}> Formação </a>
                    <a className={header_styles.links} onClick={() => scrollToElement("articles")}> Artigos </a>
                    <a className={header_styles.links} onClick={() => scrollToElement("surgeries")}> Cirurgias </a>
                    <a className={header_styles.links}  onClick={() => scrollToElement("location")}> Contato </a>
                </nav>
                <div className={header_styles.mobile}>
                    <a className={styles.menu_button}>                      
                        <Image src={icon_menu} alt="Menu" className={header_styles.menu_icon_style} />
                    </a>
                </div>
            </div>
        </header>
        <div id="onTop" className={styles.header_name_style}>
          <HeaderName />

          <Widget phoneNumber="5581993524086" message="Olá! Gostaria de agendar uma consulta." />
        </div>
        </>      
      <main className={styles.principal_container}>
        <div className={styles.secondary_container}>
          <div className={styles.green_rectangle_container}>
            <Image src={cirurgia} alt="imagem de cirurgião durante cirurgia" className={styles.pic_style} />
            <GreenRectangle width={500} height={250}/>
          </div>
          <div className={styles.mobile_green_rectangle}>
            <GreenRectangle width={310} height={230}/>
          </div>
        </div>
        <div className={styles.secondary_element} id="formation">
          <GrayRectangle width={80} height={550}/>
        </div>
        <div className={styles.bg_container} id="surgeries">
          <SurgeriesCarousel />
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
