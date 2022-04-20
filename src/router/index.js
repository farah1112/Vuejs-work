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
import TelechargerView from "../views/TelechargerView"
import CreerView from "../views/CreerView"
import CVView from "../views/CVView"
import CVsView from "../views/CVsView"
import ProfilCandidat from "../views/ProfilCandidat"
import PosteCompany from "../views/PosteCompany"
import ContactCompany from "../views/ContactCompany"
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
  {
    path: '/TelechargerView',
    name: 'TelechargerView',
    component:TelechargerView
    
  },
  {
    path: '/CreerView',
    name: 'CreerView',
    component:CreerView
    
  },
  {
    path: '/CVView',
    name: 'CVView',
    component:CVView
    
  },
  {
    path: '/CVsView',
    name: 'CVsView',
    component:CVsView
    
  },
  {
    path: '/ProfilCandidat',
    name: 'ProfilCandidat',
    component:ProfilCandidat
    
  },
  {
    path: '/PosteCompany',
    name: 'PosteCompany',
    component:PosteCompany
    
  },
  {
    path: '/ContactCompany',
    name: 'ContactCompany',
    component:ContactCompany
    
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
