import styles from './footer.style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import whatsapp_icon from '../../../public/images/footer_icons/whatsapp_footer_icon.png';
import instagram_icon from '../../../public/images/footer_icons/instagram_footer_icon.png';
import facebook_icon from '../../../public/images/footer_icons/facebook_footer_icon.png';

export default function FooterPage(){
    return(
        <div className={styles.main_footer_container}>
            <div className={styles.internal_footer_container }>
                <div className={styles.footer_professional_information}>
                    <h3>Dr. Carlos Alberto Barros</h3>
                    <span>Cirurgião de Cabeça e Pescoço</span>
                    <span>CRM-PE: 18069 | RQE: 3263</span>
                </div>
                <div className={styles.footer_social_media_links}>
                    <Link href="https://api.whatsapp.com/send/?phone=5581993524086&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+consulta.&type=phone_number&app_absent=0"><Image src={whatsapp_icon} alt=''className={styles.footer_icon}></Image></Link>
                    <Link href="https://www.instagram.com/drcarlos.cabecaepescoco/"><Image src={instagram_icon} alt='' className={styles.footer_icon}></Image></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100054473439582"><Image src={facebook_icon} alt='' className={styles.footer_icon}></Image></Link>
                </div>
            </div>
        </div>
    )
}