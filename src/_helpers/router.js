import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import LoginPage from '../views/login/LoginPage'
import ComoCriarPage from '../views/comoCriarCanvas/ComoCriarPage'
import IniciarProjetoPage from '../views/meusProjetos/IniciarProjetoPage'
import SobrePage from '../views/sobre/SobrePage'
import MeusProjetosPage from '../views/meusProjetos/MeusProjetosPage'
import EditarMeusProjetosPage from '../views/meusProjetos/EditarMeusProjetosPage'
import DetalharMeusProjetosPage from '../views/meusProjetos/DetalharMeusProjetosPage'
import ProjetosCompartilhadosPage from '../views/meusProjetos/ProjetosCompartilhadosPage'
import DetalharProjetosPublicosPage from '../views/meusProjetos/DetalharProjetosPublicosPage'
import ProjetosPublicosPage from '../views/login/ProjetosPublicosPage'
import LandingPage from '../views/login/LandingPage'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Início', component: Home },
    // { path: '/404', name: '404', component: NotFound },
    { path: '/login', component: LoginPage },
    { path: '/comoCriar', name: 'Como criar um Canvas?', component: ComoCriarPage },
    { path: '/iniciarProjeto', name: 'Iniciando um projeto :)', component: IniciarProjetoPage },
    { path: '/meusProjetos', name: 'Meus Projetos', component: MeusProjetosPage },
    { path: '/editarMeusProjetos', name: 'Editar Projeto', component: EditarMeusProjetosPage },
    { path: '/detalharMeusProjetos', name: 'Detalhar Projeto', component: DetalharMeusProjetosPage },
    { path: '/projetosCompartilhados', name: 'Projetos Compartilhados', component: ProjetosCompartilhadosPage },
    { path: '/detalharProjetosPublicos', name: 'Detalhar Projeto', component: DetalharProjetosPublicosPage },
    { path: '/sobre', name: 'Sobre nós', component: SobrePage },
    { path: '/projetosPublicos,', component: ProjetosPublicosPage },
    { path: '/landingPage', component: LandingPage }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/landingPage', '/login', '/projetosPublicos']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('usuario')
  if (authRequired && !loggedIn) {
    return next('/landingPage')
  }
  next()
})
