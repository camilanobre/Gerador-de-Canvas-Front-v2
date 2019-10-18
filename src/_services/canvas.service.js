import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const canvasService = {
  getAll,
  getPorId,
  register,
  update,
  delete: _delete
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Canvas/ObterTodosCanvas`, requestOptions).then(handleResponse)
}
function getPorId (idUsuario) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Canvas/ObterTodosCanvasUsuario/${idUsuario}`, requestOptions).then(handleResponse)
}
function register (canvas) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(canvas)
  }
  console.log('Registrando Canvas (através da service) => ' + JSON.stringify(canvas))
  return fetch(`${config.apiUrl}/Canvas/AdicionarCanvas`, requestOptions).then(handleResponse)
}

function update (canvas) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(canvas)
  }
  console.log('Update canvas (através da service) => ' + JSON.stringify(canvas))
  return fetch(`${config.apiUrl}/Canvas/AtualizarCanvas/${canvas.idCanvas}`, requestOptions).then(handleResponse)
}

function _delete (id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/Canvas/DeletarCanvas/${id}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
