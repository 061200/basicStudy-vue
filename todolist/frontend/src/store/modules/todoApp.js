const axios = require('axios');

const storage = {
  fetch() {
    axios.get('/api/todos')
    .then((response) => {
      state.todoItems = response.data;
    })
  },
};

const state = {
  todoItems: storage.fetch(),
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
}

const mutations = {
  addOneItem(state, todoItem) {
    const obj = {
      completed: false,
      id: state.todoItems.length + 1,
      item: todoItem
    };

    state.todoItems.push(obj);
  },
  
  removeOneItem(state, payload) {
    state.todoItems.splice(payload.index, 1);
  },
  
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  },
  
  clearAllItems(state) {
    state.todoItems = [];
  },
  saveItems(state) {
    // axios.post('/api/data', state.todoItems)
    // .then(res => {
    //   console.log(res.data)
    // })
    console.log(state.todoItems);
  },
  
}

export default {
  state,
  getters,
  mutations
}