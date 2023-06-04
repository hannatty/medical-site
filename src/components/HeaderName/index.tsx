import Image from 'next/image';
import Divider from '../Divider';
import headername_styles from './headername.styles.module.scss';
import logo from '../../../public/logo.png';
import detail from '../../../public/images/detail.png';
import Link from 'next/link';

export default function HeaderName(){
    return(
        <div className={headername_styles.headername_container}>
            <Link href="/" >
            <div className={headername_styles.desktop}>
                <Divider />
                <div className={headername_styles.second_header}>
                    <div className={headername_styles.secondary_element}>
                    <Image src={logo} alt="Logomarca" className={headername_styles.logo_style} />
                    </div>
                    <div className={headername_styles.header_professional_name}>
                        <h1>Carlos Alberto Barros</h1>
                        <h3>Cirurgião de cabeça e pescoço</h3>
                    </div>
                    <div className={headername_styles.secondary_element}>
                    <Image src={detail} alt="detail" className={headername_styles.logo_style} />
                    </div>
                </div>
                <Divider />
            </div>
            <div className={headername_styles.mobile}>
                <Divider />
                <div className={headername_styles.header_professional_name_mobile}>
                    <h1>Carlos Alberto Barros</h1>
                    <h3>Cirurgião de cabeça e pescoço</h3>
                </div>
                <Divider />
            </div>
            </Link>
        </div>
    )
}