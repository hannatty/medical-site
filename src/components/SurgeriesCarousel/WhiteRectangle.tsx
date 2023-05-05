import React from 'react';
import styles from './styles.module.scss';
import backgroundImage from '../../../public/images/BG_Carousel.png';

interface WhiteRectangleProps {}

const WhiteRectangle: React.FC<WhiteRectangleProps> = () => {
  return (
    <div className={styles.white_rectangle}>
      <div className={styles.white_rectangle_content}>
        <h1>CONTEÚDO AQUI</h1>
      </div>
    </div>
  );
};

export default WhiteRectangle;

