export default {
  listProduct ({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(process.env.BASE_API + 'Products?page=1&integer=1')
        .then(function (response) {
          commit('SET_LIST_PRODUCT', response)
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  addProduct ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(process.env.BASE_API + 'Product', payload)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  deleteProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios.$delete(process.env.BASE_API + `Product/${id}`)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  editProduct ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const data = JSON.parse(localStorage.getItem("data-product"))
      this.$axios.$put(process.env.BASE_API + `Product/${data._id}`, payload)
        .then(function (response) {
          resolve(response)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
