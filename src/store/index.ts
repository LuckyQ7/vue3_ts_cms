import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'vue3'
    }
  }
})

export default store
