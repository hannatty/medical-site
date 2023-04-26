import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';
import { HeaderName } from '../HeaderName';
import icon_menu from '../../../public/icon_menu.png'
import Image from 'next/image';
import React from 'react';

 export function Header(){
    return(
        <>
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav className={styles.nav_bar}>
                    <ActiveLink legacyBehavior activeClassName={styles.active} href="/"><a className={styles.links}> Início </a></ActiveLink>
                    <ActiveLink legacyBehavior activeClassName={styles.active} href="/education"><a className={styles.links}> Formação </a></ActiveLink>
                    <ActiveLink legacyBehavior activeClassName={styles.active} href="/articles"><a className={styles.links}> Artigos </a></ActiveLink>
                    <ActiveLink legacyBehavior activeClassName={styles.active} href="/surgeries"><a className={styles.links}> Principais Cirurgias </a></ActiveLink>
                    <ActiveLink legacyBehavior activeClassName={styles.active} href="/contact"><a className={styles.links}> Contato </a></ActiveLink>
                </nav>
                <div className={styles.mobile}>
                    <button className={styles.menu_button}>
                        <Image src={icon_menu} alt="Menu" className={styles.menu_icon_style} />
                    </button>
                </div>
            </div>
        </header>
        <HeaderName />
        </>
    )
}



