import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// import './assets/main.css';

const app = createApp(App);

app.use(router);

app.config.errorHandler = (err, instance, info) => {
  console.log(err);
  console.log(instance);
  console.log(info);
};

app.mount('#app');
