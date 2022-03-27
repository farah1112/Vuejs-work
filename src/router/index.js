import { createRouter, createWebHistory } from 'vue-router'


import SignUp from "../views/SignUp"
import CandidateView from "../views/CandidateView"
import CompanyView from "../views/CompanyView"
import SignIn from "../views/SignIn"



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
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
