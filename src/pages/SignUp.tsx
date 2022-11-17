import React from 'react';
import {Link} from "react-router-dom";
import {usePasswordInput} from "../UI/InputsApplied/usePasswordInput";
import {useEmailInput} from "../UI/InputsApplied/useEmailInput";
import {RouteNames} from "../routes";
import bgImg from '../assets/big-planet.jpg'
import {useLoginInput} from "../UI/InputsApplied/useLoginInput";

const SignUp = () => {
  const {passwordInput, password} = usePasswordInput('', '', '', 'Введите ваш пароль')
  const {passwordInput: confirmPasswordInput, password: confirmPassword} = usePasswordInput('', '', '', 'Потдвердите ваш пароль')
  const {loginInput, login} = useLoginInput('', '', '', 'Введите ваш логин')
  const {emailInput, email} = useEmailInput('', '', '', 'Введите ваш email')

  function signUp(e: React.FormEvent){
    e.preventDefault()
    alert(`email: ${email.value}; password: ${password.value}; login: ${login.value}`)
  }

  return (
    <main className={'sign-up'}>
      <img className={'sign-up__bg'} src={bgImg} alt=""/>
      <div className="sign-up__inner">
        <h2 className={'sign-up__title'}>Регистрация</h2>
        <div className={'sign-up__link-box'}>
          <h3>Если вы уже зарегистрированы,  вы можете</h3>
          <Link className={'sign-up__link'} to={RouteNames.SIGNIN}>войти здесь</Link>
        </div>
        <form onSubmit={signUp} className={'sign-up__form'}>
          <div className="sign-up__form-inputs">
            <div className={'sign-up__form-elem'}>
              <p className={'sign-up__form-label'}>Email</p>
              {emailInput}
            </div>
            <div className={'sign-up__form-elem'}>
              <p className={'sign-up__form-label'}>Логин</p>
              {loginInput}
            </div>
            <div className={'sign-in__form-elem'}>
              <p className={'sign-in__form-label'}>Пароль</p>
              {passwordInput}
            </div>
            <div className={'sign-up__form-elem'}>
              <p className={'sign-up__form-label'}>Подтверждение  пароля</p>
              {confirmPasswordInput}
            </div>
          </div>
          <button type={'submit'} disabled={!email.inputValid || !login.inputValid || !password.inputValid || (password.value !== confirmPassword.value)} className="sign-up__form-submit">Зарегистрироваться</button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;