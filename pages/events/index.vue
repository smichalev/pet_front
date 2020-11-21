<template>
  <div>
    <sui-breadcrumb>
      <sui-breadcrumb-section link @click="$router.push('/')">Главная страница</sui-breadcrumb-section>
      <sui-breadcrumb-divider>/</sui-breadcrumb-divider>
      <sui-breadcrumb-section active>Список событий</sui-breadcrumb-section>
    </sui-breadcrumb>
  </div>
</template>

<script>
	export default {

	};
</script>
