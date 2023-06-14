import styles from '../../styles/home.module.scss';
import professionalIntro_styles from './professionalIntro.style.module.scss';
import Image from 'next/image';
import GreenRectangle from '../GreenRectangle';
import main_picture_mobile from '../../../public/images/main_pic_mobile.png'
import main_picture_mobile_fullscreen from '../../../public/images/main_pic_mobile_fullscreen.png'
import main_pic from '../../../public/images/main_pic.jpeg'
import principal_pic from '../../../public/picture.jpeg'

export default function ProfessionalIntro(){
    return(
        <div className={professionalIntro_styles.professionalIntro_container}>
          <div className={styles.green_rectangle_container}>
            <Image src={principal_pic} alt="Foto Dr. Carlos Alberto Barros" className={styles.pic_style} />
            <GreenRectangle
                 titleRectangle='Experiência em Cirurgias de Alta Complexidade'
                 descriptionRectangle='Estou junto contigo para enfrentar os tumores de cabeça e pescoço.'
                 width={400} 
                 height={220}/>
          </div>
          <div className={professionalIntro_styles.mobile_green_rectangle}>
            <Image src={main_picture_mobile_fullscreen} alt="Foto Dr. Carlos Alberto Barros" />
            <GreenRectangle
                titleRectangle='Experiência em Cirurgias de Alta Complexidade'
                descriptionRectangle='Juntos, vamos enfrentar os tumores de cabeça e pescoço.' 
                width={300}
                height={150}/>
          </div>
        </div>
    )
}