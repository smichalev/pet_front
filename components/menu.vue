<template>
  <div class="menu">
    <div v-for="(item, index) in listMenu" :item="'menu'+index" v-if="!!~item.access.indexOf(roleUser)">
      <div class="title">{{ item.title }}</div>
      <div v-for="(i, ind) in item.items" :item="'item'+ind" v-if="!!~i.access.indexOf(roleUser)">
        <div class="menu-item" :class="{ 'active': i.active }" @click="goTo(i.href, index, ind)">
          <i :class="i.icon" class="icon"></i>
          <div>{{ i.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMenu: [
        {
          title: 'Меню сайта',
          access: ['guest', 'user', 'manager', 'admin'],
          items: [
            {
              title: 'Главная',
              active: false,
              icon: 'home',
              href: '/',
              access: ['guest', 'user', 'manager', 'admin'],
            },
            {
              title: 'Каталог серверов',
              active: false,
              icon: 'list',
              href: '/servers',
              access: ['guest', 'user', 'manager', 'admin'],
            },
            {
              title: 'Магазин скриптов',
              active: false,
              icon: 'shopping cart',
              href: '/store',
              access: ['guest', 'user', 'manager', 'admin'],
            },
            {
              title: 'Помощь',
              active: false,
              icon: 'help',
              href: '/faq',
              access: ['guest', 'user', 'manager', 'admin'],
            }
          ]
        },
        {
          title: 'Для пользователя',
          access: ['user', 'manager', 'admin'],
          items: [
            {
              title: 'Пополнить счет',
              active: false,
              icon: 'plus',
              href: '/donate',
              access: ['user'],
            },
            {
              title: 'Вывести со счета',
              active: false,
              icon: 'reply',
              href: '/withdraw',
              access: ['user'],
            },
            {
              title: 'История аккаунта',
              active: false,
              icon: 'history',
              href: '/history',
              access: ['user'],
            },
            {
              title: 'Моя страница',
              active: false,
              icon: 'user',
              href: '/profile',
              access: ['user', 'manager', 'admin'],
            },
            {
              title: 'Настройки',
              active: false,
              icon: 'settings',
              href: '/settings',
              access: ['user', 'manager', 'admin'],
            },
          ]
        },
        {
          title: 'Для продавца',
          access: ['user'],
          items: [
            {
              title: 'Статистика продаж',
              active: false,
              icon: 'signal',
              href: '/stats',
              access: ['user'],
            },
            {
              title: 'Мои сервера',
              active: false,
              icon: 'server',
              href: '/myservers',
              access: ['user'],
            },
            {
              title: 'Мой донат',
              active: false,
              icon: 'money bill alternate',
              href: '/mydonate',
              access: ['user'],
            },
            {
              title: 'Мои скрипты',
              active: false,
              icon: 'file outline',
              href: '/myscripts',
              access: ['user'],
            },
            {
              title: 'Для сервера',
              active: false,
              icon: 'magic',
              href: '/forserver',
              access: ['user'],
            }
          ]
        },
        {
          title: 'Для админа',
          access: ['manager', 'admin'],
          items: [
            {
              title: 'Управление сервисом',
              active: false,
              icon: 'heart',
              href: '/administration',
              access: ['admin'],
            },
            {
              title: 'Документация',
              active: false,
              icon: 'clipboard list',
              href: '/docs',
              access: ['manager', 'admin']
            },
          ]
        }
      ]
    }
  },
  mounted() {
    this.listMenu.forEach((item) => {
      item.items.forEach((i) => {
        if (i.href === this.$route.path) {
          i.active = true;
        }
      })
    })
  },
  watch: {
    $route(to, from) {
      this.listMenu.forEach((item) => {
        item.items.map((i) => i.active = i.href === to.path)
      })
    }
  },
  computed: {
    roleUser: function () {
      return this.$store.state.profile && this.$store.state.profile.role ? this.$store.state.profile.role.toLowerCase() : 'guest'
    }
  },
  methods: {
    goTo: function (link, index, index2) {
      if (!this.listMenu[index].items[index2].active) {
        this.$router.push(link);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 10px;
  margin-top: 20px;
  max-width: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 75px);
  overflow-y: auto;

  .title {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 5px
  }

  .menu-item {
    user-select: none;
    background: transparent;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s all;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-size: 15px;
    font-family: system-ui;
    font-weight: 400;
    border: 1px solid transparent;

    .icon {
      font-size: 20px;
      margin-right: 12px;
    }

    &:hover, &:active, &:focus {
      background: rgba(255, 255, 255, 0.7);
    }
  }

  .active {
    background: #fff;
    color: #31479a;
    font-weight: 500;

    .icon {
      color: #31479a;
    }

    &:hover {
      background: #fff;
    }
  }
}
</style>
