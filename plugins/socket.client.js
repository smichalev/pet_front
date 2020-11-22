import Vue from "vue";

export default function () {
  var socket = io('/');
  Vue.prototype.$socket = socket;
}
