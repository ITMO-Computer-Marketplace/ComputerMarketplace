import React from 'react';
import {Route, Routes} from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import PageNotFound from "../pages/PageNotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import {RouteNames} from "../routes";
import BasketPage from "../pages/BasketPage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {

  let isAuth = true

  return (
    <Routes>
      {isAuth
        ? <>
          <Route path={RouteNames.FEED} element={<FeedPage/>}/>
          <Route path={RouteNames.BASKET} element={<BasketPage/>}/>
          <Route path={RouteNames.ABOUT} element={<AboutPage/>}/>
          <Route path={'*'} element={<PageNotFound path={RouteNames.FEED}/>}/>
        </>
        : <>
          <Route path={RouteNames.SIGNIN} element={<SignIn/>}/>
          <Route path={RouteNames.SIGNUP} element={<SignUp/>}/>
          <Route path={RouteNames.FEED} element={<FeedPage/>}/>
          <Route path={'*'} element={<PageNotFound path={RouteNames.SIGNIN}/>}/>
        </>
      }
    </Routes>
  );
};

export default AppRouter;