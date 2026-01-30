import "font-awesome/css/font-awesome.css"
import Vue from 'vue'
import App from './App'
import "@/config/bootstrap"
import "@/config/msgs"
import '@/config/axios'
import '@/config/mq'
import store from "./config/store"
import router from "./config/router"

Vue.config.productionTip = false
//testes
// require("axios").defaults.headers.common["Authorization"] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE3NjkzOTgyMDcsImV4cCI6MTc2OTY1NzQwN30.d1y12j8kePBuCODUvuYBQlK2SdrDfCT9fmzJpUUnGHg"
new Vue({
  store, router,
  render: h => h(App)
}).$mount('#app')