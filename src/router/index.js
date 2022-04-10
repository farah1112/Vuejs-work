import { createRouter, createWebHistory } from 'vue-router'


import SignUp from "../views/SignUp"
import CandidateView from "../views/CandidateView"
import CompanyView from "../views/CompanyView"
import SignIn from "../views/SignIn"
import SideBar from"../components/SideBar"
import DashbordView from '@/views/Admin/DashbordView.vue'
import GestionUser from '@/views/Admin/GestionUser'
import PostuleCv from "../views/PostuleCv"
import HomeView from "../views/HomeView"


const routes = [

  {
    path:'/SignUp',
    name:'SignUP',
    component: SignUp
  },
  {
    path:'/CandidateView',
    name:'CandidateView',
    component: CandidateView
  },
  {
    path:'/CompanyView',
    name:'CompanyView',
    component: CompanyView
  },
  {
    path:'/SignIn',
    name:'SignIn',
    component: SignIn
  },
  {
    path:'/SideBar',
    name:'SideBar',
    component: SideBar
  },
  {
    path: '/DashbordView',
    name: 'DashbordView',
    component:DashbordView
    
  },
  {
    path: '/GestionUser',
    name: 'GestionUser',
    component:GestionUser
    
  },
  {
    path: '/PostuleCv',
    name: 'PostuleCv',
    component:PostuleCv
    
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component:HomeView
    
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
