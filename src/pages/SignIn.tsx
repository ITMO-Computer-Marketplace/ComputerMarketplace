import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {usePasswordInput} from "../UI/InputsApplied/usePasswordInput";
import {useEmailInput} from "../UI/InputsApplied/useEmailInput";
import {RouteNames} from "../routes";
import bgImg from '../assets/big-planet.jpg'
import Checkbox from "../UI/InputsBase/Checkbox";

const SignIn = () => {
  const {passwordInput, password} = usePasswordInput('', '', '', 'Введите ваш пароль')
  const {emailInput, email} = useEmailInput('', '', '', 'Введите ваш email')
  const [isRemembered, setIsRemembered] = useState(false)

  function signIn(e: React.FormEvent){
    e.preventDefault()
    alert(`email: ${email.value}; password: ${password.value}; запомнить пароль: ${isRemembered}`)
  }

  return (
    <main className={'sign-in'}>
      <img className={'sign-in__bg'} src={bgImg} alt=""/>
      <div className="sign-in__inner">
        <h2 className={'sign-in__title'}>Авторизация</h2>
        <div className={'sign-in__link-box'}>
          <h3>Если у вас нет аккаунта, то вы можете</h3>
          <Link className={'sign-in__link'} to={RouteNames.SIGNUP}>зарегистрироваться здесь</Link>
        </div>
        <form onSubmit={signIn} className={'sign-in__form'}>
          <div className="sign-in__form-inputs">
            <div className={'sign-in__form-elem'}>
              <p className={'sign-in__form-label'}>Email</p>
              {emailInput}
            </div>
            <div className={'sign-in__form-elem'}>
              <p className={'sign-in__form-label'}>Пароль</p>
              {passwordInput}
            </div>
          </div>
          <div className="sign-in__form-actions">
            <div className="sign-in__form-remember">
              <Checkbox checked={isRemembered} onChange={() => setIsRemembered(!isRemembered)}/>
              <p>Запомнить меня</p>
            </div>
            <Link className={'sign-in__form-reset-pass'} to={RouteNames.SIGNUP}>Забыли пароль?</Link>
          </div>
          <button type={'submit'} disabled={!email.inputValid || !password.inputValid} className="sign-in__form-submit">Войти</button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;