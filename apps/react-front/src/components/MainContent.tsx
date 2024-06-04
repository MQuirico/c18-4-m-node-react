import React from 'react';
import styles from './MainContent.module.css'

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 h-[90%] w-auto">
      <div className={styles.logoCont}>
        <img src="circulo.svg" alt="Legal Builder Logo" className={styles.circulo} />
        <img src="logo.webp" alt="Legal Builder Logo" className={styles.logo}></img>
      </div>
      <h2 className="text-4xl mb-2 font-marce text-yellow">Legal Builder</h2>
     

      <p className="text-xl text-grey font-marce w-[480px]">Builder and organizer for Law Firm</p>
    </div>
  );
};

export default MainContent;