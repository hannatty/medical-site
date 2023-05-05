import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import logo from '../../../public/logo_mod.png';
import logo_name from '../../../public/prof_title.png';


export default function FooterPage(){
    return(
        <div className={styles.footer_container + ' centered'}>
            <div className={styles.footer_professional}>
                <div className={styles.footer_content}>
                    <Image src={logo} alt="Dr. Carlos Alberto Barros " className={styles.logo_size} />
                    <Image src={logo_name} alt="logo"/>
                </div>
            </div>
        </div>
    )
}