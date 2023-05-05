import React, { Children } from 'react';
import styles from '../../styles/home.module.scss';

interface GreenRectangleProps {
  width: number;
  height: number;
}

const GreenRectangle: React.FC<GreenRectangleProps> = ({ width, height}) => {
  return (
    <div className={styles.green_rectangle} style={{ width, height }}>
     <h1>Experiência em Microcirurgia Reconstrutiva </h1>
     <h3>Atendimento nos principais hospitais do Recife </h3>
    </div>
  );
};

export default GreenRectangle;

