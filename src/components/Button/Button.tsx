import React from 'react';

import cn from 'classnames';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button
      type="submit"
      className={cn(
        // eslint-disable-next-line no-nested-ternary
        type === undefined ? cn(style.root, style.primary) : type === 'third' ? cn(style.root, style.third) : '',
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
