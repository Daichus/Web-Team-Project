<script>
export default {
  props:{
    chapt1Data:{
      type:Array,
      required:true
    }
  },
  methods:{
    closePgn(){
      this.$emit("closePgn");
    }
  }
}
</script>
<template>
  <div class="container">
    <div v-for="dialogue in chapt1Data" :key="dialogue">
      <div class="eng">{{dialogue.english}}</div>
      <div class="cn">{{dialogue.chinese}}</div>
    </div>
  </div>
  <button class="btn btn-primary" @click="closePgn">Click to close</button>
</template>

<style scoped>
.container{
  width: 500px;
  height: 1000px;
  background: #ffffff;
  border: solid lightgrey;
  border-radius: 45px;
  box-shadow: 5px 5px 5px lightgrey;
}
</style>