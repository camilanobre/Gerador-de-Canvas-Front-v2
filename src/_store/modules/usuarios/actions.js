import { usuarioService } from '../../../_services'

export default {

  getAll ({ commit }) {
    commit('getAllRequest')
    usuarioService.getAll().then(
      usuarios => commit('getAllSuccess', usuarios),
      error => commit('getAllFailure', error)
    )
  },

  register ({ dispatch, commit }, usuario) {
    commit('registerRequest', usuario)
    // console.log('CADASTRANDO TIPO sistema NOVO' + JSON.stringify(tiposistema))
    usuarioService.register(usuario).then(
      usuario => {
        commit('registerSuccess', usuario)
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
    usuarioService.delete(id).then(
      usuario => commit('deleteSuccess', id),
      error => commit('deleteSuccess', { id, error: error.toString() })
    )
  }
}
