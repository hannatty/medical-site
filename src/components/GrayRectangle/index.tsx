import React, { Children } from 'react';
import styles from '../../styles/home.module.scss';
import bio_picture from '../../../public/images/bio_pic.png';
import Image from 'next/image';

interface GrayRectangleProps {
  width: number;
  height: number;
}

const GrayRectangle: React.FC<GrayRectangleProps> = ({ width, height}) => {

  return (
    <div className={styles.green_rectangle_container} id="formation">
        <div className={styles.gray_rectangle} style={{ width: `${width}%`, height }}>
          <div className={styles.section_1}>
            <Image src={bio_picture} alt="foto pessoal" className={styles.bio_pic_style}/>
          </div>
          <div className={styles.section_2}>
            <p>"Desde o início da faculdade de medicina, me encantei com a possibilidade de resolver 
                  os problemas das pessoas através de cirurgias. Participei dos mais simples aos mais 
                  complexos procedimentos, sempre buscando o mais alto grau de sofisticação no tratamento 
                  cirúrgico dos  meus pacientes."
              </p>
            <button><a> Saiba Mais </a></button>
          </div>
      </div>
    </div>
  );
};

export default GrayRectangle;
