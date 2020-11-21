<template>
  <div class="nav">
    <logo></logo>
    <div v-if="login">
      выйти
    </div>
    <div v-else>
      <div class="loginbtn"></div>
    </div>
  </div>
</template>

<script>
import logo from './../logo.vue'
import modal from './../modal.vue'

export default {
  components: {
    logo,
    modal
  },
  data() {
    return {

    }
  },
  computed: {
    login: function () {
      return this.$store.state.profile
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #033c84;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  .profile {
    background: transparent;

    &:hover, &:focus, &:active {
      background: #ffffff12;
    }
  }

  .loginbtn {
    background: #171a21;
    width: 148px;
    cursor: pointer;
    height: 47px;
    background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png);
    background-size: 129px;
    background-position: right;
    background-repeat: no-repeat;
    transition: background 1s;

    &:hover {
      background: #35373a;
      background-image: url(https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png);
      background-size: 129px;
      background-position: right;
      background-repeat: no-repeat;
    }
  }
}
</style>
