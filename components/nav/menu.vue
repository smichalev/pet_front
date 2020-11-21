<template>
  <div class="nav">
    <logo></logo>
    <div v-if="profile">
      <sui-button secondary @click="logout" :loading="loadingBtnLogout" :disabled="disabledBtnLogout">ВЫЙТИ
      </sui-button>
    </div>
    <div v-else>
      <sui-button secondary @click="authorization" :loading="loadingBtn" :disabled="disabledBtn"><i
        class="icon steam"></i> STEAM
        LOGIN
      </sui-button>
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
      loadingBtn: false,
      disabledBtn: false,
      loadingBtnLogout: false,
      disabledBtnLogout: false
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile ? this.$store.state.profile : null
    }
  },
  methods: {
    logout() {
      this.loadingBtnLogout = true;
      this.disabledBtnLogout = true;
      this.$axios.post('http://dev.fastdonate.local/api/auth/logout').then(() => {
        this.$store.commit('logout');
        this.profile = {};
      }).finally(() => {
        this.loadingBtnLogout = false;
        this.disabledBtnLogout = false;
      });
    },
    authorization() {
      this.loadingBtn = true;
      this.disabledBtn = true;
      window.location.href = 'http://dev.fastdonate.local/api/auth/steam';
    },
    loadInfo() {
      this.$axios.get('http://dev.fastdonate.local/api/').then((data) => {
        if (data && data.data && data.data.profile) {
          this.$store.commit('login', data.data.profile);
        }
        else {
          this.logout();
        }
      }).catch((err) => {
        this.logout();
      });
    }
  },
  mounted() {
    this.loadInfo();
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #31479a;
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
}
</style>
