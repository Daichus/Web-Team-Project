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
      const dialContainer = document.getElementById("dialContainer");
      setTimeout(function() {
        dialContainer.style.opacity = 0;
      }, 50);
      dialContainer.addEventListener('transitionend',()=>{this.$emit("closePgn");})

    }
  },
  mounted() {
    const dialContainer = document.getElementById("dialContainer");
    setTimeout(function() {
      dialContainer.style.opacity = 1;
    }, 50);
  }
}
</script>
<template>
  <div class="container dialogue-container" id="dialContainer">
    <div v-for="dialogue in chapt1Data" :key="dialogue">
      <div class="eng">{{dialogue.english}}</div>
      <div class="cn">{{dialogue.chinese}}</div>
    </div>

  </div>
  <div>
    <button class="btn btn-primary" @click.stop="closePgn">返回</button>
  </div>
</template>

<style scoped>
.container{
  height: 800px;
  background: #ffffff;
  border: solid lightgrey;
  border-radius: 25px;
  box-shadow: 5px 5px 5px lightgrey;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
}
</style>