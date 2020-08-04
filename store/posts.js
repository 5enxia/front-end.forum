export const state = () => ({
  posts: [],
  length: 0,
})

export const mutations = {
  GET_POSTS(state, posts) {
    state.posts = posts.reverse()
    state.length = state.posts.length
  },

  DELETE_POST(state, post) {
    state.posts.splice(state.posts.indexOf(post), 1)
    state.length = state.posts.length
  },
}

export const actions = {
  async getPosts({ commit }) {
    const res = await this.$axios.get('/get')
    console.log(res)
    await commit('GET_POSTS', res.data.Contents)
  },

  async postPost({ commit }, content) {
    this.$axios.defaults.headers.common.Authorization = `Bearer ${window.localStorage.getItem('auth_token')}`
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
  length(state) {
    return state.length
  },
}
