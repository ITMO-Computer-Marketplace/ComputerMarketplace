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

const BasketPage = () => {

  const [basket, setBasket] = useState<[{count: number, price: number, total: number}] | []>([])

  let count = 3
  let countItem = 2
  let price = 4200
  let total = 8400

  let navigator = useNavigate()

  let isAuth = true

  function logout(){
    navigator(RouteNames.SIGNIN)
  }

  function removeItem(){
    alert('del')
  }

  return (
    <div className={'basket page'}>
      <div className={'container'}>
        <div className="basket__inner page__inner">
          <Header className={'page__header'} isAuth={isAuth} logout={logout}/>
          <div className={'basket__main'}>
            <div className={'basket__order-box'}>
              <div className={'basket__order-title'}>
                <span>Моя корзина({count})</span>
              </div>
              <div className={'basket__order-header'}>
                <span className={'basket__order-header-item'}>Товары</span>
                <span className={'basket__order-header-price'}>Цена</span>
                <span className={'basket__order-header-count'}>Количество</span>
                <span className={'basket__order-header-total'}>Итого</span>
              </div>
              <div className={'basket__order-list'}>
                <div className={'basket__order-list-item'}>
                  <div className={'basket__order-list-info'}>
                    <div className={'basket__order-list-img-box'}>
                      <img className={'basket__order-list-img'} src={itemImg} alt={'item'}/>
                      <span className={"basket__order-list-del-btn"} onClick={removeItem}>X</span>
                    </div>
                    <div className={'basket__order-list-texts'}>
                      <span className={'basket__order-list-name'}>
                        Ноутбук Lenovo Legion 5 Pro
                      </span>
                      <span className={'basket__order-list-color'}>
                        Color: Black
                      </span>
                    </div>
                  </div>
                  <div className={'basket__order-list-price'}>
                    ₽{price}
                  </div>
                  <div className={'basket__order-list-count'}>
                    {countItem}
                  </div>
                  <div className={'basket__order-list-total'}>
                    ₽{total}
                  </div>
                </div>
                <div className={'basket__order-list-item'}>
                  <div className={'basket__order-list-info'}>
                    <div className={'basket__order-list-img-box'}>
                      <img className={'basket__order-list-img'} src={itemImg} alt={'item'}/>
                      <span className={"basket__order-list-del-btn"} onClick={removeItem}>X</span>
                    </div>
                    <div className={'basket__order-list-texts'}>
                      <span className={'basket__order-list-name'}>
                        Ноутбук Lenovo Legion 5 Pro
                      </span>
                      <span className={'basket__order-list-color'}>
                        Color: Black
                      </span>
                    </div>
                  </div>
                  <div className={'basket__order-list-price'}>
                    ₽{price}
                  </div>
                  <div className={'basket__order-list-count'}>
                    {countItem}
                  </div>
                  <div className={'basket__order-list-total'}>
                    ₽{total}
                  </div>
                </div>
                <div className={'basket__order-list-item'}>
                  <div className={'basket__order-list-info'}>
                    <div className={'basket__order-list-img-box'}>
                      <img className={'basket__order-list-img'} src={itemImg} alt={'item'}/>
                      <span className={"basket__order-list-del-btn"} onClick={removeItem}>X</span>
                    </div>
                    <div className={'basket__order-list-texts'}>
                      <span className={'basket__order-list-name'}>
                        Ноутбук Lenovo Legion 5 Pro
                      </span>
                      <span className={'basket__order-list-color'}>
                        Color: Black
                      </span>
                    </div>
                  </div>
                  <div className={'basket__order-list-price'}>
                    ₽{price}
                  </div>
                  <div className={'basket__order-list-count'}>
                    {countItem}
                  </div>
                  <div className={'basket__order-list-total'}>
                    ₽{total}
                  </div>
                </div>
                <div className={'basket__order-list-item'}>
                  <div className={'basket__order-list-info'}>
                    <div className={'basket__order-list-img-box'}>
                      <img className={'basket__order-list-img'} src={itemImg} alt={'item'}/>
                      <span className={"basket__order-list-del-btn"} onClick={removeItem}>X</span>
                    </div>
                    <div className={'basket__order-list-texts'}>
                      <span className={'basket__order-list-name'}>
                        Ноутбук Lenovo Legion 5 Pro
                      </span>
                      <span className={'basket__order-list-color'}>
                        Color: Black
                      </span>
                    </div>
                  </div>
                  <div className={'basket__order-list-price'}>
                    ₽{price}
                  </div>
                  <div className={'basket__order-list-count'}>
                    {countItem}
                  </div>
                  <div className={'basket__order-list-total'}>
                    ₽{total}
                  </div>
                </div>
              </div>
              <div className={'basket__order-action'}>
                <div className={'basket__order-total'}>
                  Итого: {total}
                </div>
                <button onClick={() => alert('оформлено!')} className="basket__order-btn">
                  Перейти к оформлению
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;