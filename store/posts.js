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
    const res = await this.$axios.get('http://localhost:8080/posts')
    await commit('GET_POSTS', res.data)
  },

  async postPost({ commit }, post) {
    const data = {
      username: post.username,
      content: post.content,
      timestamp: new Date(),
    }
    await this.$axios.post('http://localhost:8080/posts', data)
  },

  async deletePost({ commit }, post) {
    await this.$axios.delete(`http://localhost:8080/posts/${post.id}`)
    await commit('DELETE_POST', post)
  },
}

export const getters = {
  posts(state) {
    return state.posts
  },
}
