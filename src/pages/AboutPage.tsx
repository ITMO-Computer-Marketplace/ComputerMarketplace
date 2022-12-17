import React, {useState} from 'react';
import bgImg from "../assets/red-clouds.jpg";
import logoImg from "../assets/logo.png";
import basketIcon from "../assets/icons/basket-circle.png";
import historyIcon from "../assets/icons/history-circle.png";
import userIcon from "../assets/icons/user-circle.png";
import productImg from "../assets/product-img.png";
import {Link, useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import Header from "../components/Header";
import itemImg from '../assets/Headset.png'

const AboutPage = () => {

  let navigator = useNavigate()

  let isAuth = true

  function logout(){
    navigator(RouteNames.SIGNIN)
  }

  function removeItem(){
    alert('del')
  }

  return (
    <div className={'about page'}>
      <div className={'container'}>
        <div className="about__inner page__inner">
          <Header className={'page__header'} isAuth={isAuth} logout={logout}/>
          <div className={'about__main'}>
            <div className="about__text-box">
              <h2 className="about__text-title">
                О нас
              </h2>
              <div className="about__text-main">
                “Company name” - новый онлайн-маркетплейс компьютерных товаров. Современный формат интернет-магазина с возможностью для поставщиков добавлять новые позиции и широким ассортиментом комплектующих для клиентов.
                Мы стремимся к отличным результатам, ценим Ваше время и надеемся на длительно и взаимовыгодное сотрудничество.
              </div>
            </div>
            <div className="about__contact">
              <h2 className="about__contact-title">
                Контакты
              </h2>
              <div className="about__contact-list">
                <div className="about__contact-item">
                  {/*<img src="" alt="" className="about__contact-img"/>*/}
                  <div className="about__contact-text">
                    contact@mysite.com
                  </div>
                </div>
                <div className="about__contact-item">
                  {/*<img src="" alt="" className="about__contact-img"/>*/}
                  <div className="about__contact-text">
                    Кронверский пр-т 49
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;