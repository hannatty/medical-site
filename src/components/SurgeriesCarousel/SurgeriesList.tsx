import React from 'react';
import surgery_icon from '../assets/surgery_icon.png';
import Image from 'next/image';
import surg_icon from '../../../public/surg_icon.png';
import styles from './styles.module.scss';

interface Surgery {
  id: number;
  title: string;
}

const surgeries: Surgery[] = [
  { id: 1, title: 'Tireoidectomia' },
  { id: 2, title: 'Cordectomia ou Laringectomias' },
  { id: 3, title: 'Sialoendoscopia' },
  { id: 3, title: 'Remoção de tumores na boca' },
];

const SurgeriesList: React.FC = () => {
  return (
    <div>
        {surgeries.map((surgery) => (
          <div key={surgery.id}>
            <Image src={surg_icon} alt="ícone" className={styles.surg_symbol_style}/>
            <h1>{surgery.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default SurgeriesList;
