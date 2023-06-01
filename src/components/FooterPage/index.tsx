import styles from './footer.style.module.scss';
import Image from 'next/image';
import whatsapp_icon from '../../../public/images/footer_icons/whatsapp_footer_icon.png';
import instagram_icon from '../../../public/images/footer_icons/instagram_footer_icon.png';
import sharing_icon from '../../../public/images/footer_icons/sharing_footer_icon.png';

export default function FooterPage(){
    return(
        <div className={styles.footer_container}>
            {/* <div className={styles.footer_professional}>
                <div className={styles.footer_content}>
                </div>
            </div> */}
            <div className={styles.footer_professional_information}>
                <h3>Dr. Carlos Alberto Barros</h3>
                <span>Cirurgião de Cabeça e Pescoço</span>
                <span>CRM-PE: 18069 | RQE: 3263</span>
            </div>
            <div className={styles.footer_social_media_links}>
                <Image src={whatsapp_icon} alt=''></Image>
                <Image src={instagram_icon} alt='' className={styles.footer_icon}></Image>
                <Image src={sharing_icon} alt='' className={styles.footer_icon}></Image>
            </div>

        </div>
    )
}