<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.todoItems"
        :key="todoItem.id"
        class="shadow"
      >
        <i class="checkBtn fas fa-check"
          :class="{checkBtnCompleted: todoItem.completed}"
          @click="toggleComplete({todoItem, index})"></i>

        <span :class="{textCompleted: todoItem.completed}">
        {{ todoItem.item }}
        </span>

        <span
          class="removeBtn"
          @click="removeTodo({todoItem, index})"
        >
          <i class="fas fa-minus"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TodoList',
  // created () {
  //   this.$http.get('/api/todos')
  //   .then((res) => {
  //     console.log(res.data)
  //     this.todoItems = res.data
  //   })
  // },
  // data () {
  //   return {
  //     todoItems: []
  //   }
  // },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem',
    }),
  },
  computed: {
    ...mapGetters({
      todoItems: 'storedTodoItems'
    }),
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #2A3E59;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  color: #b3adad;
  text-decoration: line-through;
}

/* 리스트 아이템 트랜지션 효과 */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
