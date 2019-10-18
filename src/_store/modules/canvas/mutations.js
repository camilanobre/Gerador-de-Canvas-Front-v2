export default {

  getAllRequest (state) {
    state.all = {
      items: []
    }
  },
  getAllSuccess (state, canvas) {
    state.all = { items: canvas }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  getPorIdRequest (state) {
    state.all = { loading: true }
  },
  getPorIdSuccess (state, canvas) {
    state.all = { items: canvas }
  },
  getPorIdFailure (state, error) {
    state.all = { error }
  },

  registerRequest (state, canvas) {
    state.status = { registering: true }
  },
  registerSuccess (state, canvas) {
    state.status = {}
  },
  registerFailure (state, canvas) {
    state.status = {}
  },
  deleteRequest (state, id) {
    state.all.items = state.all.items.map(canvas =>
      canvas.idCanvas === id
        ? { ...canvas, deleting: true }
        : canvas
    )
  },
  deleteSuccess (state, id) {
    state.all.items = state.all.items.filter(canvas => canvas.idCanvas !== id)
  },
  deleteFailure (state, { id, error }) {
    state.all.items = state.items.map(canvas => {
      if (canvas.idCanvas === id) {
        const { deleting, ...canvasCopy } = canvas
        return { ...canvasCopy, deleteError: error }
      }
      return canvas
    })
  }
}
