import React from 'react';
import styles from './styles.module.scss'

interface DarkGreenRectangleProps {}

const DarkGreenRectangle: React.FC<DarkGreenRectangleProps> = () => {
  return (
    <div className={styles.dark_green_rectangle} style={{ width: '80vw', height: '20rem' }}/>
  );
};

export default DarkGreenRectangle;
