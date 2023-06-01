import React, { Children } from 'react';
import styles from './greenRectangle.styles.module.scss';

interface GreenRectangleProps {
  titleRectangle: string;
  descriptionRectangle: string;
  width: number;
  height: number;
}

const GreenRectangle: React.FC<GreenRectangleProps> = ({titleRectangle,descriptionRectangle, width, height}) => {
  return (
    <div className={styles.green_rectangle} style={{ width, height }}>
     <h3>{titleRectangle}</h3>
     <span>{descriptionRectangle}</span>
    </div>
  );
};

export default GreenRectangle;

