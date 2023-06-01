import styles from '../../styles/home.module.scss';
import professionalIntro_styles from './professionalIntro.style.module.scss';
import Image from 'next/image';
import GreenRectangle from '../GreenRectangle';
import main_picture_mobile from '../../../public/images/main_pic_mobile.png'
import main_pic from '../../../public/images/main_pic.jpeg'

export default function ProfessionalIntro(){
    return(
        <div className={professionalIntro_styles.professionalIntro_container}>
          <div className={styles.green_rectangle_container}>
            <Image src={main_pic} alt="Foto Dr. Carlos Alberto Barros" className={styles.pic_style} />
            <GreenRectangle
                 titleRectangle='a fazer'
                 descriptionRectangle='a fazer'
                 width={500} 
                 height={250}/>
          </div>
          <div className={professionalIntro_styles.mobile_green_rectangle}>
            <Image src={main_picture_mobile} alt="Foto Dr. Carlos Alberto Barros" />
            <GreenRectangle
                titleRectangle='Experiência em Cirurgias de Alta Complexidade'
                descriptionRectangle='Juntos, vamos enfrentar os tumores de cabeça e pescoço.' 
                width={187}
                height={100}/>
          </div>
        </div>
    )
}