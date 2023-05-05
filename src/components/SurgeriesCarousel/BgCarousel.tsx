import Image from 'next/image';
import styles from './styles.module.scss';
import DarkGreenRectangle from './DarkGreenRectangle';
import pic_surgery from '../../../public/images/bg-pic-surgery.png';
import WhiteRectangle from './WhiteRectangle';


export default function BgCarousel(){
    return(
        <div className={styles.bg_container}>
            <Image src={pic_surgery} alt="Background" className={styles.surgery_bg} />
            <div className={styles.heading}>            
                <WhiteRectangle /> 
            </div>
            <DarkGreenRectangle />
        </div>
    )
}
