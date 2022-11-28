import React, {FC, InputHTMLAttributes, useState} from 'react';
import viewActive from "../assets/icons/view-blue.png";
import viewDisabled from "../assets/icons/view-grey.png";
import passwordIcon from "../assets/icons/password.png";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: boolean
  icon?: string
}

const PasswordInput: FC<InputProps> = ({className, icon, error, ...args}) => {
  const [visible, setVisible] = useState(true)

  return (
    <div className={'password-input'}>
      {icon && <img className={'input-icon-underlined__icon'} src={icon} alt=""/>}
      <input
        type={visible ? 'text' : 'password'}
        className={'password-input__elem ' + (error ? ' password-input__elem--error ' : '') + className}
        {...args}
      />
      <img className={'password-input__view'} src={visible ? viewActive : viewDisabled} onClick={() => setVisible(prev => !prev)} alt={visible ? 'не показывать' : 'показывать'}/>
    </div>
  );
};

export default PasswordInput;