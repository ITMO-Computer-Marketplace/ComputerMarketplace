import React from 'react';
import logoImg from "../assets/logo.png";
import basketIcon from "../assets/icons/basket-circle.png";
import historyIcon from "../assets/icons/history-circle.png";
import userIcon from "../assets/icons/user-circle.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";

const Header = ({className, isAuth, logout}: {className?: string, isAuth: boolean, logout: () => void}) => {
  let navigator = useNavigate()

  const location = useLocation()
  let currentPath = location.pathname

  return (
    <div className={'header ' + (className || '')}>
      <img onClick={() => navigator(RouteNames.FEED)} src={logoImg} alt="logo" className="header__logo"/>
      <div className="header__actions">
        <ul className="header__nav">
          <li className={"header__nav-link " + (RouteNames.SIGNIN === currentPath ? "header__nav-link--active" : '')}>
            Категории
          </li>
          <li className={"header__nav-link " + (RouteNames.ABOUT === currentPath ? "header__nav-link--active" : '')}>
            <Link to={RouteNames.ABOUT}>О нас</Link>
          </li>
        </ul>
        <div className="header__buttons">
          <Link to={RouteNames.BASKET} className="header__button">
            <img src={basketIcon} alt="basket" className="header__button-img"/>
            <span className="header__button-text">
                    Корзина
                  </span>
          </Link>
          {isAuth && <>
            <div className="header__button">
              <img src={historyIcon} alt="basket" className="header__button-img"/>
              <span className="header__button-text">
                    История заказов
                  </span>
            </div>
            <div className="header__button">
              <img src={userIcon} alt="basket" className="header__button-img"/>
              <span className="header__button-text">
                    Личный кабинет
                  </span>
            </div>
          </>}
        </div>
        <div>
          <button className="header__log-btn" onClick={logout}>
            {isAuth ? 'Выйти' : 'Войти'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;