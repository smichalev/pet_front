<template>
<div>
  <div style="font-weight: 600;font-size: 18px;">{{ info.title }}</div>
  <div style="color: rgba(0, 0, 0, 0.4);">{{ $moment(info.createdAt).fromNow() }}</div>
  <div>
    {{ info.content }}
  </div>
  <div style="display: flex">
    <i class="thumbs up icon green" primary></i> <span style="font-weight: bold; color: green">{{ info.like }}</span>
    <div style="margin-left: 10px"></div>
    <i class="thumbs down icon red"></i> <span style="font-weight: bold; color: red">{{ info.dislike }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: ['info']
}
</script>
