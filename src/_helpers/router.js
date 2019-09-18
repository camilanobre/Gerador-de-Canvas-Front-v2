import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import LoginPage from '../views/login/LoginPage'
import ComoCriarPage from '../views/comoCriarCanvas/ComoCriarPage'
import IniciarProjetoPage from '../views/iniciarProjeto/IniciarProjetoPage'
import SobrePage from '../views/sobre/SobrePage'
import MeusProjetosPage from '../views/meusProjetos/MeusProjetosPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home Page', component: Home },
    // { path: '/404', name: '404', component: NotFound },
    { path: '/login', component: LoginPage },
    { path: '/comoCriar', name: 'Como criar um Canvas?', component: ComoCriarPage },
    { path: '/iniciarProjeto', name: 'Iniciando um projeto :)', component: IniciarProjetoPage },
    { path: '/meusProjetos', name: 'Meus Projetos', component: MeusProjetosPage },
    { path: '/sobre', name: 'Sobre nós', component: SobrePage }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('usuario')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})
