import React from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import styles from './CardLogin.module.scss';

function CardLogin() {
  return (
    <form name="card-login1" className={styles['card-login']}>
      <div className={styles['card-login__heading']}>
        <Heading type="h1" title="Впервые в Twitter?" />
      </div>
      <div className={styles['card-login__title']}>
        Зарегистрируйтесь прямо сейчас, чтобы персонализировать свою ленту!
      </div>
      <div className={styles['card-login__signin']}>
        <div className={styles['card-login__signin-button']}>
          <Button type="colored">Регистрация с помощью Google</Button>
        </div>
        <div className={styles['card-login__signin-button']}>
          <Button type="colored">Зарегистрироваться с Apple ID</Button>
        </div>
        <div className={styles['card-login__signin-button']}>
          <Button type="colored">Зарегистрироваться</Button>
        </div>
      </div>
      <div className={styles['card-login__agreement']}>
        Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и
        Политикой конфиденциальности, а также с Политикой использования файлов
        cookie.
      </div>
    </form>
  );
}

export default CardLogin;
