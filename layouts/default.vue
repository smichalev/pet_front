<template>
  <div>
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
      dialog: false,
    };
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


