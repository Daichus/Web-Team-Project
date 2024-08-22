
<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://www.fcu.edu.tw/">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-feather" viewBox="0 0 16 16">
            <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
            </svg></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <!-- <a class="nav-link" href="https://www.iecs.fcu.edu.tw">Sentence</a> -->
                <select class="form-select" id="topic-select">
                  <!-- v-model="selectedTopic" id="topic-select" -->
                        <option disabled value="">請選擇主題</option>
                        <option v-for="s in topicList" :key="s" :value="s">
                            {{ s }}
                        </option>
                </select>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.fcu.edu.tw">Information</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.taichung.gov.tw">LogIn
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" focusable="false" role="presentation" aria-hidden="true">
                    <path fill="currentColor" d="M20 3c.5 0 .9.4 1 .9V20c0 .5-.4.9-.9 1H7c-.5 0-.9-.4-1-.9v-3.5c0-.6.4-1 1-1 .5 0 .9.4 1 .9V18c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v1.5c0 .5-.4.9-.9 1H7c-.5 0-.9-.4-1-.9V4c0-.5.4-.9.9-1H20zm-9.3 5.7c0-.4.5-.7.9-.4l3.3 3.3c.2.2.2.5 0 .7l-3.3 3.3c-.3.3-.9.1-.9-.4V13H4c-.5 0-1-.4-1-1s.5-1 1-1h6.7V8.7z">
                    </path>
                  </svg>
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Search  Season/Episode">
              <button class="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>
  </template>
  

  
  <script>
  export default {
    data() {
        return {
          topicList: [
            "Friends",
            "The Bear",
            "Under the Bridge",
            "Ted",
            "One Day",
            "The Regime",
            "Young Sheldon"
          ]
        }
      },
    //   watch: {
    //     selectedTopic(newTopic) {
    //         const country = this.countryList.find(c => c.name === newCountry);
    //         if (country) {
    //             this.goldMedals = country.gold;
    //             this.silverMedals = country.silver;
    //             this.bronzeMedals = country.bronze;
    //         } else {
    //             this.goldMedals = 0;
    //             this.silverMedals = 0;
    //             this.bronzeMedals = 0;
    //         }
    //     }
    // },
  };
  </script>
  
  <style>
  .nav-item {
    margin-right: 10px;
  }
  </style>  