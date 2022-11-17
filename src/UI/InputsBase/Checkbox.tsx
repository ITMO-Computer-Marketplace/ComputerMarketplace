import React, {FC, InputHTMLAttributes} from 'react';
import disIcon from '../../assets/icons/checkbox-disabled.png'
import actIcon from '../../assets/icons/checkbox-active.png'

const Checkbox: FC<InputHTMLAttributes<HTMLInputElement>> = ({className, ...args}) => {

  return (
    <label className={'checkbox ' + (className || '')}>
      <img src={args.checked ? actIcon : disIcon} alt={''}/>
      <input
        type="checkbox"
        className={"checkbox__input"}
        {...args}
      />
    </label>
  );
};

export default Checkbox;