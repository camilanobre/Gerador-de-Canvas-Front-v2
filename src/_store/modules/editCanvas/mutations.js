import { router } from '../../../_helpers'

export default {
  getCanvasEdit (state, canvas) {
    state.canvasEdit = canvas
    router.push('/editarMeusProjetos')
  },
  getCanvasView (state, canvas) {
    state.canvasEdit = canvas
    router.push('/detalharMeusProjetos')
  },
  getCanvasViewPublico (state, canvas) {
    state.canvasEdit = canvas
    router.push('/detalharProjetosPublicos')
  },
  registerRequest (state, canvas) {
    state.status = { registering: true }
  },
  registerSuccess (state, canvas) {
    state.status = {}
  },
  registerFailure (state, canvas) {
    state.status = {}
  }

}
