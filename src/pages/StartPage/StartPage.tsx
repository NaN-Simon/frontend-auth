import React from 'react';
import styles from './StartPage.module.scss';
import CardLogin from '../../components/CardLogin/CardLogin';

function StartPage() {
  return (
    <main className={styles['start-page__wrapper']}>
      <CardLogin />
    </main>
  );
}

export default StartPage;
