import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButton {
  type: string;
  disable?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}
function Button({
  type, disable, onClick, children,
}: IButton) {
  const classesButton = classNames(
    styles['button'],
    type === 'colored' && styles['button__colored'],
    type === 'tranparent' && styles['button__colored__transparent'],
    type === 'link' && styles['button__link'],
    disable && styles['button--disable'],
  );

  return (
    <button
      className={classesButton}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  disable: null,
  onClick: null,
  children: null,
};
