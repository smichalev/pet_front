<template>
  <div class="card">
      <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: #fff;
  border-radius: 5px;
  margin: 10px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;

  div.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 13px;
    border-top: 3px solid transparent;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #f4f4f4;
  }

  div.orange {
    border-top: 3px solid #f39c12;
  }

  div.blue {
    border-top: 3px solid #033c84;
  }

  div.content {
    padding: 10px;
  }
}
</style>
