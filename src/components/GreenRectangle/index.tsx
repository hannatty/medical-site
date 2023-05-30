import React, { Children } from 'react';
import styles from '../../styles/home.module.scss';

interface GreenRectangleProps {
  width: number;
  height: number;
}

const GreenRectangle: React.FC<GreenRectangleProps> = ({ width, height}) => {
  return (
    <div className={styles.green_rectangle} style={{ width, height }}>
     <h1>Experiência em Cirurgias de alta complexidade, Fellowship em microcirurgia reconstrutiva e Certificação em cirurgia robótica </h1>
     <h3>Estou junto contigo para enfrentar tumores de cabeça e pescoço. </h3>
    </div>
  );
};

export default GreenRectangle;

