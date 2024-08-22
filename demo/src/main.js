import { createApp } from 'vue'
import App from './App.vue'
import carousel from './components/carousel.vue'
import card from './components/card.vue'
import sort from './components/sort.vue'
import updateMedals from './components/updateMedals.vue'
import paris_footer from './components/footer.vue'
import navbar from './components/navbar.vue'
import pagination from './components/pagination.vue'

const app = createApp(App)

app.component('carousel', carousel);
app.component('card', card);
app.component('sort', sort);
app.component('updateMedals', updateMedals);
app.component('paris_footer', paris_footer);
app.component('navbar', navbar);
app.component('pagination', pagination);


app.mount('#app')