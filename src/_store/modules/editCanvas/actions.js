import { canvasService } from '../../../_services'
import { router } from '../../../_helpers'
export default {
  getCanvasEdit ({ commit }, canvas) {
    commit('getCanvasEdit', canvas)
    console.log('edit Canvas: ' + canvas)
  },
  getCanvasView ({ commit }, canvas) {
    commit('getCanvasView', canvas)
  },
  getCanvasViewPublico ({ commit }, canvas) {
    commit('getCanvasViewPublico', canvas)
  },
  getCanvasViewPublicoSemUsuario ({ commit }, canvas) {
    commit('getCanvasViewPublicoSemUsuario', canvas)
  },
  update ({ dispatch, commit }, canvas) {
    commit('registerRequest', canvas)
    console.log('EDITANDO  REGISTER CANVAS => ' + canvas)
    canvasService.update(canvas)
      .then(
        canvas => {
          commit('registerSuccess', canvas)
          router.push('/meusProjetos')
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
