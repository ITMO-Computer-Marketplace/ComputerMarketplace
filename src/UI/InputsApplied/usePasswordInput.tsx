import {useInput} from "../../hooks/useInput";
import React from "react";
import {passwordRule} from "../../utils/validationRules";
import LabelError from "../LabelError";
import PasswordInput from "../PasswordInput";
import passwordIcon from '../../assets/icons/password.png'

export const usePasswordInput = (value: string, className?: string, boxClassName?: string, placeholder?: string) => {
  const password = useInput(value, passwordRule)

  const passwordInput = <div className={boxClassName}>
    <PasswordInput
      icon={passwordIcon}
      className={className}
      error={password.isDirty && !password.inputValid}
      value={password.value}
      onChange={password.onChange}
      onBlur={password.onBlur}
      placeholder={placeholder || 'Пароль'}
    />
    {(password.isDirty && password.isEmpty) && <LabelError>Пароль не указан</LabelError>}
    {(password.isDirty && !password.isEmpty && password.isMinLength) &&
      <LabelError>Пароль слишком короткий</LabelError>}
    {(password.isDirty && password.isMaxLength) && <LabelError>Пароль слишком длинный</LabelError>}
  </div>

  return {passwordInput, password}
}


