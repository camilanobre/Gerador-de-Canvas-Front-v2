import { canvasService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    canvasService.getAll()
      .then(
        canvas => commit('getAllSuccess', canvas),
        error => commit('getAllFailure', error)
      )
  },
  getPorId ({ commit }, id) {
    commit('getPorIdRequest')
    canvasService.getPorId(id)
      .then(
        canvas => commit('getPorIdSuccess', canvas),
        error => commit('getPorIdFailure', error)
      )
  },
  update ({ dispatch, commit }, canvas) {
    commit('registerRequest', canvas)
    canvasService.update(canvas)
      .then(
        canvas => {
          commit('registerSuccess', canvas)
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            canvasService.getAll()
              .then(
                canvass => commit('getAllSuccess', canvass),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  register ({ dispatch, commit }, canvas) {
    commit('registerRequest', canvas)
    canvasService.register(canvas)
      .then(
        canvas => {
          commit('registerSuccess', canvas)
          router.push('/meusProjetos')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        error => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  delete ({ commit }, id) {
    commit('deleteRequest', id)

    canvasService.delete(id)
      .then(
        canvas => commit('deleteSuccess', id),
        error => commit('deleteSuccess', { id, error: error.toString() })
      )
  }
}
