import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  description: string;
  divider?: boolean;
}

const ArticleCard = ({ title, description, divider=true }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {divider && <div className={styles.divider}>{divider}</div>}
    </div>
  );
};

export default ArticleCard;
