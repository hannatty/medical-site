import Image from 'next/image';
import Divider from '../Divider';
import mystyles from './styles.module.scss';
import styles from '../Header/styles.module.scss';
import logo from '../../../public/logo.jpeg';

export function HeaderName(){
    return(
        <div className={styles.HeaderContainer}>
            <div className={mystyles.desktop}>
                <Divider />
                <div className={mystyles.second_header}>
                    <Image src={logo} alt="Logomarca" className={mystyles.logo_style} />
                    <div className={styles.header_professional_name}>
                        <h1>Carlos Alberto Barros</h1>
                        <h3>Cirurgião de cabeça e pescoço</h3>
                    </div>
                </div>
                <Divider />
            </div>
            <div className={styles.mobile}>

            </div>
        </div>
    )
}