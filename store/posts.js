export const state = () => ({
  posts: [],
})

export const mutations = {
  GET_POSTS(state, posts) {
    state.posts = posts
  },

  DELETE_POST(state, post) {
    state.posts.splice(state.posts.indexOf(post), 1)
  },
}

export const actions = {
  async getPosts({ commit }) {
    const res = await this.$axios.get('/get')
    console.log(res)
    await commit('GET_POSTS', res.data.Contents)
  },

  async postPost({ commit }, content) {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('auth_token')}`
    return await this.$axios.post('/post', { Message: content })
  },

  async deletePost({ commit }, post) {
    await this.$axios.delete(`/posts/${post.id}`)
    await commit('DELETE_POST', post)
  },
}

export const getters = {
  posts(state) {
    return state.posts
  },
}
