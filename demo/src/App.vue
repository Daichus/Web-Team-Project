
<template>
  <navbar />
  <carousel />
  <div class="container mt-3">
      <div class="row justify-content-center" id="medalTable">
          <div v-for="set in setList" :key="set.name" class="country-card col-lg-2 col-md-3 col-sm-4 col-6">
              <card :setName="set.name" :setImg="set.img" @showChapt1 = "showChapt1" />
          </div> 
      </div>
      <!-- 頁碼 -->
    <chapt1 v-if="chapt1isVisible" :chapt1Data="chapt1Data"  @closePgn = "closePage" />
  </div>

  <!-- footer -->
  <paris_footer />
  
</template>

<script>
import UpdateMedals from './components/updateMedals.vue';
import Chapt1 from "@/components/chapt1.vue";
import {loadChapter1}from "/src/scripts/loadFile.js"

export default {
  components: {Chapt1},
  data() {
      return {
          set: null,
          img2_url: {
              第一集: "friends1.jpg",
              第二集: "friends2.jpg",
              第三集: "friends3.jpeg",
              第四集: "friends4.jpg",
              第五集: "friends5.jpg",
              第六集: "friends6.jpg",
          },
          setList: [
          ],
          selectedCountry: "",
          chapt1isVisible:false,
          chapt1Data:''
      };

  },
  async created() {
      await this.fetch_sets();
      console.log('Fetched sets:', this.set); // 檢查 this.set 是否已正確加載
      this.build_set_list();
      console.log(this.setList);

  try{
      const data = await loadChapter1("/src/textRaw/subtitles_test2.json");
      this.chapt1Data = data;
  }catch(error) {
    console.error('Error loading data:', error);
  }
  },
  methods: {
      async fetch_sets() {
        try{
          const response = await fetch("set.json");
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          this.set = data.set;
          console.log('Sets loaded:', this.set);
        } catch (error) {
            console.error('Failed to load sets:', error);
        }
      },
      build_set_list() {
        console.log('Building set list with:', this.set); // 檢查 this.set 的值
          if (!this.set) {
              console.log('set is not built');
              return;
          }
          this.setList = this.set.map(m => {
              return {
                  name: m,
                  img: this.img2_url[m],
              };
          });
        //   console.log('country list: ', this.countryList);
      },
    showChapt1(){
        this.chapt1isVisible = !this.chapt1isVisible
    },
    closePage() {
        this.chapt1isVisible = false;
    }
  }
}
</script>


<style></style>  