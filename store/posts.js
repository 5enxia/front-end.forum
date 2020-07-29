import axios from 'axios'

export const state = () => ({
  posts: [],
})

export const mutations = {
  GET_POSTS(state, posts) {
    state.posts = posts
  },
}

export const actions = {
  async getPosts({ commit }) {
    const res = await axios.get('http://localhost:8080/posts')
    await commit('GET_POSTS', res.data)
  },

  async postPost({ commit }, post) {
    const data = {
      username: post.username,
      content: post.content,
      timestamp: new Date(),
    }
    await axios.post('http://localhost:8080/posts', data)
  },
}

export const getters = {
  posts(state) {
    return state.posts
  },
}
