import React from "react";
import Image from "next/image";
import styles from './styles.module.scss';
import amil from '../../../public/images/HealthInsuranceLogo/amil.png';
import bradesco from '../../../public/images/HealthInsuranceLogo/bradesco.png'
import cassi from '../../../public/images/HealthInsuranceLogo/cassi.png'
import compesa from '../../../public/images/HealthInsuranceLogo/compesa.png'
import fachesf from '../../../public/images/HealthInsuranceLogo/fachesf.png'
import fca from '../../../public/images/HealthInsuranceLogo/fca.png'
import fusex from '../../../public/images/HealthInsuranceLogo/fusex.png'
import geap from '../../../public/images/HealthInsuranceLogo/geap.png'
import sismepe from '../../../public/images/HealthInsuranceLogo/sismepe.png'
import unimed from '../../../public/images/HealthInsuranceLogo/unimed.png'



export function HealthInsurance(){
    return(
        <div className={styles.general_container}>
            <h1>Planos de Saúde</h1>
            <section className={styles.logo_line}>
                <Image src={amil} alt="logo Amil" className={styles.logo_style} />
                <Image src={bradesco} alt="logo Bradesco" className={styles.logo_style} />
                <Image src={cassi} alt="logo Cassi" className={styles.logo_style} />
                <Image src={compesa} alt="logo Compesa" className={styles.logo_style} />
                <Image src={fachesf} alt="logo Fachesf" className={styles.logo_style} />
            </section>
            <section className={styles.logo_ine}>
                <Image src={fca} alt="logo FCA Saúde" className={styles.logo_style} />
                <Image src={fusex} alt="logo Fuxex" className={styles.logo_style} />
                <Image src={geap} alt="logo GEAP" className={styles.logo_style} />
                <Image src={sismepe} alt="logo SISMEPE" className={styles.logo_style} />
                <Image src={unimed} alt="logo Unimed" className={styles.logo_style} />
            </section>
        </div>
    )
}