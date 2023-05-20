import Image from 'next/image';
import Divider from '../Divider';
import mystyles from './styles.module.scss';
import styles from '../../styles/styles.module.scss';
import logo from '../../../public/logo.png';
import detail from '../../../public/images/detail.png';

export default function HeaderName(){
    return(
        <div className={styles.HeaderContainer}>
            <div className={mystyles.desktop}>
                <Divider />
                <div className={mystyles.second_header}>
                    <div className={mystyles.secondary_element}>
                    <Image src={logo} alt="Logomarca" className={mystyles.logo_style} />
                    </div>
                    <div className={mystyles.header_professional_name}>
                        <h1>Carlos Alberto Barros</h1>
                        <h3>Cirurgião de cabeça e pescoço</h3>
                    </div>
                    <div className={mystyles.secondary_element}>
                    <Image src={detail} alt="detail" className={mystyles.logo_style} />
                    </div>
                </div>
                <Divider />
            </div>
            <div className={mystyles.mobile}>
                <Divider />
                <div className={mystyles.header_professional_name_mobile}>
                    <h1>Carlos Alberto Barros</h1>
                    <h3>Cirurgião de cabeça e pescoço</h3>
                </div>
                <Divider />
            </div>
        </div>
    )
}