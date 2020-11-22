<template>
  <div>
    <div @click="send">test</div>
    <div v-for="msg in messages">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import news from './../components/news';

export default {
  components: {
    news
  },
  data: () => {
    return {
      messages: []
    }
  },
  methods: {
    send() {
      this.$axios.post('/api/chat/sendmsg');
    }
  },
  mounted() {
    this.$socket.on('new_msg_chat', (message) => {
      this.messages.push(message);
    })
  }
};
</script>
