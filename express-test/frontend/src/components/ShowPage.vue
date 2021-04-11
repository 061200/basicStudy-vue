<template>
  <div>
    <h1>상세 내용</h1>
    <div>
      <p>{{ movie.name }}</p>
      <img :src="movie.poster" alt="">
      <p>{{ movie.year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  created (){
    var id = this.$route.params.id
    this.$http.get(`/api/movies/${id}`)
    .then((response) => {
      this.movie = response.data[0]
      console.log(this.movie)
    })
  },
  data () {
    return {
      movie: {}
    }
  }
}
</script>

<style scoped>
</style>
