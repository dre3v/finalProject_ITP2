import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import Quiz from '../views/QuizApp.vue';
import Area from '../views/Area.vue'
import Scores from '../views/Scores.vue';
import AxiosDemo from '../views/AxiosDemo.vue';
import Personal from '../views/Personal.vue';

const routes = [
        {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
      {
        path: '/stringApp',
        name: 'StringAppView',
        component: StringAppView
      },
      {
        path: '/personal',
        name: 'Personal',
        component: Personal
      },
      {
      path: '/basicMath',
      name: 'basicMath',
      component: BasicMathView
      },
      {
      path: '/axiosDemo',
      name:'axiosDemo',
      component: AxiosDemo
      },
      {
        path: '/area',
        name:'area',
        component: Area
      },  
      {
        path: '/quiz',
        name:'QuizApp',
        component: Quiz
      },     
    {
        path: '/scores',
        name: 'Scores',
        component: Scores
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router