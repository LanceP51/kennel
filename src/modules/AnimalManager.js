// const animalManager = {
//     getAll: () => fetch ('http://localhost:5002/animals')
//     .then(response => response.json())
// }

// export default animalManager

// same as above
const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  }
}