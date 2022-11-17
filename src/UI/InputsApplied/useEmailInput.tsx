import {useInput} from "../../hooks/useInput";
import React from "react";
import {emailRule} from "../../utils/validationRules";
import LabelError from "../LabelError";
import InputUnderlinedWithIcon from "../InputsBase/inputUnderlinedWithIcon";
import emailIcon from '../../assets/icons/email.png'

export const useEmailInput = (value: string, className?: string, boxClassName?: string, placeholder?: string) => {
  const email = useInput(value, emailRule)

  const emailInput = <div className={boxClassName}>
    <InputUnderlinedWithIcon
      icon={emailIcon}
      value={email.value}
      error={email.isDirty && !email.inputValid}
      onChange={email.onChange}
      onBlur={email.onBlur}
      placeholder={placeholder || 'Электронная почта'}
      className={className}
    />
    {(email.isDirty && email.isEmpty) && <LabelError>Почта не укказана</LabelError>}
    {(email.isDirty && email.isMaxLength) && <LabelError>Почта слишком длинная</LabelError>}
    {(!email.isEmpty && email.isDirty && email.isNotEmail) && <LabelError>Почта не подходит</LabelError>}
  </div>

  return {emailInput, email}
}