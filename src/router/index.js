import { createRouter, createWebHistory } from 'vue-router'


import SignUp from "../views/SignUp"
import CandidateView from "../views/CandidateView"
import CompanyView from "../views/CompanyView"
import SignIn from "../views/SignIn"
import SideBar from"../components/SideBar"
import PostuleCv from "../views/PostuleCv"
import HomeView from "../views/HomeView"
import TelechargerView from "../views/TelechargerView"
import CreerView from "../views/CreerView"
import CVView from "../views/CVView"
import CVsView from "../views/CVsView"
import ProfilCandidat from "../views/ProfilCandidat"
import PosteCompany from "../views/PosteCompany"
import GerePoste from "../views/GerePoste"
import CandidatureCompany from "../views/CandidatureCompany"
import RechercheCv from "../views/RechercheCv"
import SaveCv from "../views/SaveCv"
import StatistCompany from "../views/StatistCompany"
import CvForm from "../views/Profil/CvForm"
import LettreForm from "../views/Profil/LettreForm"
import ModifierPost from "../views/ModifierPost"
import DetailsPost from "../views/DetailsPost"
import PostuleLettre from "../views/PostuleLettre"
import RechercheEmploi from "../views/RechercheEmploi"
import AproposPage from "../views/AproposPage"
import OffreSave from "../views/OffreSave"
import UserOffreSave from "../views/UserOffreSave"
import InfoTest from "../views/InfoTest"
import ModifierLaPoste from "../views/ModifierLaPoste"
import CompanyPage from "../views/CompanyPage"
import DarkMode from "../views/DarkMode"
import AdminDashboard from "../views/AdminDashboard"
import DetailsPostAdmin from "../views/DetailsPostAdmin"
import ModifierUser from "../views/ModifierUser"
import GestionEntreprise from "../views/GestionEntreprise"
import ModifierEntreprise from "../views/ModifierEntreprise"
import GestionOffreAdmin from "../views/GestionOffreAdmin"
import ModifierOffreAdmin from "../views/ModifierOffreAdmin"
import GestionUsers from "../views/GestionUsers"
import AddAdmin from "../views/AddAdmin"
import ModifierAdmin from "../views/ModifierAdmin"
import GestionAdmins from "../views/GestionAdmins"
import PostuleOffreUser from "../views/PostuleOffreUser"
import ProfilUser from "../views/ProfilUser"
import GestionStatistiqueAdmin from "../views/GestionStatistiqueAdmin"
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
    path: '/GerePoste',
    name: 'GerePoste',
    component:GerePoste
    
  },
  {
    path: '/CandidatureCompany',
    name: 'CandidatureCompany',
    component:CandidatureCompany
    
  },
  {
    path: '/RechercheCv',
    name: 'RechercheCv',
    component:RechercheCv
    
  },
  {
    path: '/SaveCv',
    name: 'SaveCv',
    component:SaveCv
    
  },
  {
    path: '/StatistCompany',
    name: 'StatistCompany',
    component:StatistCompany
    
  },
  {
    path: '/CvForm',
    name: 'CvForm',
    component:CvForm
    
  },
  {
    path: '/LettreForm',
    name: 'LettreForm',
    component:LettreForm
    
  },
  {
    path: '/ModifierPost',
    name: 'ModifierPost',
    component:ModifierPost
    
  },
  {
    path: '/DetailsPost',
    name: 'DetailsPost',
    component:DetailsPost
    
  },
  {
    path: '/PostuleLettre',
    name: 'PostuleLettre',
    component:PostuleLettre
    
  },
  {
    path: '/RechercheEmploi',
    name: 'RechercheEmploi',
    component:RechercheEmploi
    
  },
  {
    path: '/AproposPage',
    name: 'AproposPage',
    component:AproposPage
    
  },
  {
    path: '/OffreSave',
    name: 'OffreSave',
    component:OffreSave
    
  },
  {
    path: '/UserOffreSave',
    name: 'UserOffreSave',
    component:UserOffreSave
    
  },
  {
    path: '/InfoTest',
    name: 'InfoTest',
    component:InfoTest
    
  },
  {
    path: '/ModifierLaPoste',
    name: 'ModifierLaPoste',
    component:ModifierLaPoste
    
  },
  {
    path: '/CompanyPage',
    name: 'CompanyPage',
    component:CompanyPage
    
  },
  {
    path: '/DarkMode',
    name: 'DarkMode',
    component:DarkMode
    
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component:AdminDashboard
    
  },
  {
    path: '/DetailsPostAdmin',
    name: 'DetailsPostAdmin',
    component:DetailsPostAdmin
    
  },
  {
    path: '/ModifierUser',
    name: 'ModifierUser',
    component:ModifierUser
    
  },
  {
    path: '/GestionEntreprise',
    name: 'GestionEntreprise',
    component:GestionEntreprise
    
  },
  {
    path: '/ModifierEntreprise',
    name: 'ModifierEntreprise',
    component:ModifierEntreprise
    
  },
  {
    path: '/GestionOffreAdmin',
    name: 'GestionOffreAdmin',
    component:GestionOffreAdmin
    
  },
  {
    path: '/ModifierOffreAdmin',
    name: 'ModifierOffreAdmin',
    component:ModifierOffreAdmin
    
  },
  {
    path: '/GestionUsers',
    name: 'GestionUsers',
    component:GestionUsers
    
  },
  {
    path: '/AddAdmin',
    name: 'AddAdmin',
    component:AddAdmin
    
  },
  {
    path: '/ModifierAdmin',
    name: 'ModifierAdmin',
    component:ModifierAdmin
    
  },
    {
    path: '/GestionAdmins',
    name: 'GestionAdmins',
    component:GestionAdmins
    
  },
  {
    path: '/PostuleOffreUser',
    name: 'PostuleOffreUser',
    component:PostuleOffreUser
    
  },
  {
    path: '/ProfilUser',
    name: 'ProfilUser',
    component:ProfilUser
    
  },
  {
    path: '/GestionStatistiqueAdmin',
    name: 'GestionStatistiqueAdmin',
    component:GestionStatistiqueAdmin
    
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
