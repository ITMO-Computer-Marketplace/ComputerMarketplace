import React, {ButtonHTMLAttributes, FC} from 'react';

export enum buttonSizes{
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  size?: buttonSizes
}

const Button: FC<ButtonProps> = ({children, className, size, ...args}) => {
  return (
    <button className={'button ' + (size ? `button-${size}` : '') + (className || '')} {...args}>
      {children}
    </button>
  );
};

export default Button;