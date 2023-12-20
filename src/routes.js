import HomePage from "./components/pages/HomePage.vue";
import LoginPage from "./components/pages/LoginPage.vue";
import SignupPage from "./components/pages/SignupPage.vue";
import DetailPage from "./components/pages/DetailPage.vue";
import UserPage from "./components/pages/UserPage.vue";
import Cookies from "js-cookie";
import {store} from "./store/index.js";

const checkAuth = () => {
  const jwtCookie = Cookies.get("jwt");
  const expirationDate = Cookies.get("tokenExpirationDate");
  const userId = Cookies.get("UID");

  if(jwtCookie ){ 
    if(new Date().getTime() <  +expirationDate){
      store.commit('auth/setToken', { 
        idToken : jwtCookie,
        expiresIn : expirationDate  
      });
      store.dispatch('auth/getUser', userId);
      return true;
    }else { 
      store.commit('auth/setUserLogout');
      return false;
    }
  }else { 
    return false
  }
}



export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    beforeEnter : () => {
      checkAuth();
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/recipe/:id",
    name: "detailPage",
    component: DetailPage,
  },{
    path : '/user/:component',
    name: 'userPage',
    component : UserPage,
    beforeEnter : (to, from, next) => {
      checkAuth() ? next() : next({name : "login"});
    }
  }
];
