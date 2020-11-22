import Vue from "vue";

export default function () {
  var socket = io('/');
  Vue.prototype.$socket = socket;
  Vue.prototype.$domain = 'http://'+process.env.NODE_IP;

}
