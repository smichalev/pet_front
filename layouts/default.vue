<template>
  <div v-if="loaded">
      <navbar></navbar>
      <menu_bar class="navigation-desktop"></menu_bar>
      <div class="content-area">
          <nuxt></nuxt>
      </div>
  </div>
</template>

<script>
import navbar from './../components/nav/menu';
import menu_bar from './../components/menu';

	export default {
		components: {
      navbar,
      menu_bar
		},
		data() {
			return {
			  loaded: false,
				login: false,
				profile: {},
        dialog: false,
			};
		},
		methods: {
		  notify() {
        this.$notify({
          title: 'Ошибка',
          message: '!!!',
          type: 'error',
          position: 'bottom-right'
        });
      },
			authorization() {
				window.location.href = 'http://dev.fastdonate.local/api/auth/steam';
			},
			logout() {
				this.$axios.post('http://dev.fastdonate.local/api/auth/logout').then(() => {
					this.$store.commit('logout');
					this.profile = {};
					this.login = false;
				});
			},
		},
		mounted() {
			Promise.all([
					this.$axios.get('http://dev.fastdonate.local/api/profile'),
				])
				.then(([data]) => {
					if (data.data.profile !== {}) {
						this.$store.commit('login', data.data.profile);
						this.profile = data.data.profile;
            this.loaded = true;
						this.login = true;
					}
				})
				.catch(() => {
					this.login = false;
					this.loaded = true;
					this.logout();
				});
		},
	};
</script>

<style lang="scss" scoped>

.content-area {
  padding: 10px;
  @media (min-width: 1264px) {
    margin-left: 240px;
  }
}

.navigation-desktop {
  @media (max-width: 1264px) {
    display: none;
  }

  @media (min-width: 1264px) {
    display: block;
  }
}
</style>


