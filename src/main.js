import Vue from "vue";
import App from "./App";

new Vue({
    render: h => h(App)
    // The above arrow function is 100% equivalent to the one bwlow:
    // render: function(h) {
    //     return createElement(App);
    // }
}).$mount("#app");