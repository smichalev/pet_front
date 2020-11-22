<template>
  <div class="nav">
    <logo></logo>
    <div v-if="profile" style="display: flex; align-items: center">
      <a is="sui-label" color="blue" image size="medium">
        <img :src="profile.avatar" />
        {{ profile.login }}
        <sui-label-detail>{{ profile.balance }} рублей</sui-label-detail>
      </a>
      <sui-button color="orange" content="ВЫЙТИ" @click="logout" :loading="loadingBtnLogout" :disabled="disabledBtnLogout" style="font-size: 12px; margin-left: 10px"/>
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
      this.$axios.post(this.$domain+'/api/auth/logout').then(() => {
        this.$store.commit('logout');
        this.profile = {};
      }).finally(() => {
        this.loadingBtnLogout = false;
        this.disabledBtnLogout = false;
        this.$store.commit('loaded', true);
      });
    },
    authorization() {
      this.loadingBtn = true;
      this.disabledBtn = true;
      window.location.href = this.$domain+'/api/auth/steam';
    },
    loadInfo() {
      this.$axios.get(this.$domain+'/api/').then((data) => {
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
