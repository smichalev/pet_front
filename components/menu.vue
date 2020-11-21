<template>
  <div class="menu">
    <div v-for="(item, index) in listMenu" :item="'menu'+index">
      <div class="title">{{ item.title }}</div>
      <div v-for="(i, ind) in item.items" :item="'item'+ind">
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
          items: [
            {
              title: 'Главная',
              active: false,
              icon: 'home',
              href: '/'
            },
            {
              title: 'Каталог серверов',
              active: false,
              icon: 'list',
              href: '/servers'
            },
            {
              title: 'Магазин скриптов',
              active: false,
              icon: 'shopping cart',
              href: '/store'
            }
          ]
        },
        {
          title: 'Для пользователя',
          items: [
            {
              title: 'Пополнить счет',
              active: false,
              icon: 'plus',
              href: '/donate'
            },
            {
              title: 'Вывести со счета',
              active: false,
              icon: 'reply',
              href: '/withdraw'
            },
            {
              title: 'История аккаунта',
              active: false,
              icon: 'history',
              href: '/history'
            },
            {
              title: 'Моя страница',
              active: false,
              icon: 'user',
              href: '/profile'
            },
            {
              title: 'Настройки',
              active: false,
              icon: 'settings',
              href: '/settings'
            },
            {
              title: 'Помощь',
              active: false,
              icon: 'help',
              href: '/faq'
            }
          ]
        },
        {
          title: 'Для продавца',
          items: [
            {
              title: 'Статистика продаж',
              active: false,
              icon: 'signal',
              href: '/stats'
            },
            {
              title: 'Мои сервера',
              active: false,
              icon: 'server',
              href: '/myservers'
            },
            {
              title: 'Мой донат',
              active: false,
              icon: 'money bill alternate',
              href: '/mydonate'
            },
            {
              title: 'Мои скрипты',
              active: false,
              icon: 'file outline',
              href: '/myscripts'
            },
            {
              title: 'Для сервера',
              active: false,
              icon: 'magic',
              href: '/forserver'
            }
          ]
        },
        {
          title: 'Для админа',
          items: [
            {
              title: 'Управление сервисом',
              active: false,
              icon: 'heart',
              href: '/administration'
            },
            {
              title: 'Документация',
              active: false,
              icon: 'clipboard list',
              href: '/docs'
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
  methods: {
    goTo: function(link, index, index2){
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
  height: 100%;
  max-width: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;

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
      background: rgba(255,255,255,0.7);
    }
  }

  .active {
    background: #fff;
    font-weight: 500;
    border: 1px solid #ccc;

    &:hover {
      background: #fff;
    }
  }
}
</style>
