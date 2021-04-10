<template>
  <div class="clearAllContainer shadow">
    <span
      class="clearAllBtn"
      @click="clearTodo">
      Clear All
      </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TodoFooter',
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems',
    }),
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  font-weight: 700;
  color: #2A3E59;
  display: block;
}
</style>
