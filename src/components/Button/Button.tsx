import React from 'react';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyle: {
    width: string;
    backgroundColor: string;
    fontSize: string;
  };
}

const Button: React.FC<ButtonProps> = ({ children, onClick, buttonStyle }) => {
  return (
    <button style={{ ...buttonStyle }} type="submit" className={style.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
