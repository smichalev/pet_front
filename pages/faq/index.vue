<template>
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section link @click="$router.push('/')">Главная страница</sui-breadcrumb-section>
      <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
      <sui-breadcrumb-section active>Помощь</sui-breadcrumb-section>
    </sui-breadcrumb>
    <sui-card style="width: 100%; margin-top:8px">
      <sui-card-content>
        <sui-card-header>О сервисе</sui-card-header>
        <sui-card-meta>Обновлено</sui-card-meta>
        <sui-card-description
        >
          <div>Данный сервис является удобным инструментом для монетизации серверов, а также надёжным и быстрым способом получать донат на любимых серверах.</div>

         <div>Поддерживаются следующие донаты:</div>
          <ol is="sui-list">
          <li is="sui-list-item"> DarkRP - Выдача денег</li>
          <li is="sui-list-item">PointShop - Выдача поинтов</li>
          <li is="sui-list-item">PointShop 2 - Выдача поинтов</li>
          <li is="sui-list-item">NutSctipt 1.0, 1.1 - Выдача флагов</li>
          <li is="sui-list-item">Выдача оружия при каждом спавне.</li>
          <li is="sui-list-item">Применение модели для игрока при каждом спавне.</li>
          <li is="sui-list-item">Выдача привилегий в ULX (Администратор, модератор, и т.д.), в т.ч. и на определённый срок.</li>
          </ol>
<div>
            Сервис создан для реализации следующих целей: создание удобства для игроков и владельцев серверов, организация единого сервиса для русскоязычного сообщества GMOD, повышение уровня доверия между участниками.
          </div>
        </sui-card-description>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
};
</script>
