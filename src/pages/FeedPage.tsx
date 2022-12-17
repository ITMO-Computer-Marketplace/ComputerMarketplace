import React from 'react';
import bgImg from "../assets/red-clouds.jpg";
import logoImg from "../assets/logo.png";
import basketIcon from "../assets/icons/basket-circle.png";
import historyIcon from "../assets/icons/history-circle.png";
import userIcon from "../assets/icons/user-circle.png";
import productImg from "../assets/product-img.png";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import Header from "../components/Header";

const FeedPage = () => {

  let navigator = useNavigate()

  let isAuth = true

  function logout(){
    navigator(RouteNames.SIGNIN)
  }

  return (
    <div className={'feed page'}>
      <div className={'container'}>
        <div className="feed__inner page__inner">
          <Header className={'feed__header page__header'} isAuth={isAuth} logout={logout}/>

          <div className="feed__product">
            <img src={productImg} alt="" className="feed__product-img"/>
            <div className="feed__product-main">
              <h1 className="feed__product-title">
                Монитор Acer Predator XB271HAbmiprzx
              </h1>
              <div className="feed__product-info">
                <p className="feed__product-text">
                  Игра без компромиссов. Сверхвысокая частота
                  обновления и цвета IPS в обновленном агрессивном
                  дизайне. Разрешение WQHD 2560 x 1440 создает четкие
                  и ясные текстуры
                </p>
                <div className="feed__product-footer">
                  <div className="feed__product-price">
                    ₽40000
                  </div>
                  <button onClick={() => alert('bought!')} className="feed__product-buy">
                    Купить сейчас
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;