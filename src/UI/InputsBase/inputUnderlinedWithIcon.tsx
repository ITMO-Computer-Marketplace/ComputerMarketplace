import React, {FC, InputHTMLAttributes} from 'react';

interface InputUnderlinedWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: boolean
  icon?: string
}

const InputUnderlinedWithIcon: FC<InputUnderlinedWithIconProps> = ({className, icon, error, ...args}) => {
  return (
    <div className={'input-icon-underlined'}>
      {icon && <img className={'input-icon-underlined__icon'} src={icon} alt=""/>}
      <input
        type={'text'}
        className={'input-icon-underlined__elem ' + (error ? ' input-icon-underlined__elem--error ' : '') + className}
        {...args}
      />
    </div>
  );
};

export default InputUnderlinedWithIcon;