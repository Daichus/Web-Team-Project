
<template>
  <!-- <div class="col-sm-4 card"> -->
    <img class="card-img-top img-fluid" :src="'/img2/' + setImg" alt="Card image" >
    <div class="card-body">
        <h5 class="card-title">{{ setName }}</h5>
        <p class="card-text">Some example text some example text.
            John Doe is an architect and engineer
        </p>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal1">
        See Profile
        </button>
        <!-- The Modal -->
        <div class="modal fade" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">
  
                <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">Information</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
  
                    <!-- Modal body -->
                    <div class="modal-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur alias adipisci aspernatur, odit error, consectetur aperiam sed consequatur voluptatum cumque temporibus eius quis molestias autem dolorem tempore? Ipsa, id pariatur.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit molestiae ex eligendi dolor ab obcaecati esse quae possimus iure sunt voluptatum minima, velit dolore error amet placeat repellendus ut. Laboriosam?
                    </div>
  
                    <!-- Modal footer -->
                    <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="showChapt1">Enter</button>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  <!-- </div> -->

</template>

<script>
export default {
  props: ['setName', 'setImg'],
  methods:{
    showChapt1() {
      this.$emit('showChapt1');
    }
  },
  //cards被創建以後,初始透明度為0,以下代碼將執行每張卡片透明度依序設定為1
  mounted() {
    const cards = document.getElementsByClassName('country-card');
    for (let i = 0; i < cards.length; i++) {
      // 使用 setTimeout 来延迟透明度的改变
      setTimeout(() => {
        cards[i].style.opacity = 1;
      }, i * 120);
    }
  }
}
</script>
<style>
.country-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #ddd;
    border-radius: 8px;
    height: 350px;
    width: 30%;
    margin: 10px;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
}
.card-img-top {
    width: 200px;
    height: auto;
    margin-bottom: 10px;
}
.card-body {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
button {
  transition: transform 0.9s;
}
button:hover {
  transform: scale(1.2, 1.2);
}
</style>    