import { canvasService } from '../../../_services'

export default {
  getCanvasEdit ({ commit }, canvas) {
    commit('getCanvasEdit', canvas)
    console.log('edit Canvas: ' + canvas)
  },
  getCanvasView ({ commit }, canvas) {
    commit('getCanvasView', canvas)
  },
  register ({ dispatch, commit }, canvas) {
    commit('registerRequest', canvas)
    console.log('EDITANDO  REGISTER CANVAS => ' + canvas)
    canvasService.update(canvas)
      .then(
        canvas => {
          commit('registerSuccess', canvas)
          // router.push('/meusProjetos')
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
