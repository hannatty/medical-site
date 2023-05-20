import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import zap_icon from '../../../public/whatsapp.png';

interface WidgetProps {
  phoneNumber: string;
  message: string;
}

const Widget: React.FC<WidgetProps> = ({ phoneNumber, message }) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber.replace(/\D+/g, '')}?text=${encodedMessage}`, '_blank');
  };

  const iconUrl = useMemo(() => {
    return zap_icon.src;
  }, []);

  return (
    <div className={styles.widget}>
      <img
        src={iconUrl}
        alt="Widget Icon"
        className={styles.widget_icon}
        onClick={handleClick}
      />
    </div>
  );
};

export default Widget;
