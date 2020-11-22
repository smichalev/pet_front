<template>
<div>
  <card>
    <div class="title orange">
      <div>
        Актуальные новости проекта
      </div>
      <div>
        <sui-button circular icon="arrow left" size="mini" :disabled="backBtn"/>
        <sui-button circular icon="arrow right" size="mini" :disabled="nextBtn"/>
      </div>
    </div>
    <div class="content">
      <div v-if="!news.length">
        Новостей нет
      </div>
      <div v-else>
        <div v-for="item of news" :key="item.id">
          <newItem :info="item"></newItem>
        </div>
      </div>
    </div>
  </card>
  <card>
    <div class="title blue">Разместить новость</div>
    <div class="content">
      <sui-form>
        <sui-form-field>
          <label>Заголовок</label>
          <input v-model="title" />
        </sui-form-field>
        <sui-form-field>
          <label>Текст новости</label>
          <textarea v-model="description"></textarea>
        </sui-form-field>
      </sui-form>
      <div style="display: flex; justify-content: end; padding-top: 10px">
        <sui-button type="submit" primary @click="addNews">Разместить новость</sui-button>
      </div>
    </div>
  </card>
</div>
</template>

<script>
import card from "../card";
import newItem from "./new";

export default {
  data() {
    return {
      news: [],
      title: '',
      description: '',
      nextBtn: false,
      backBtn: false
    }
  },
  mounted() {
    this.loadNews();
  },
  methods: {
    loadNews(page) {
      if(!page) {
        page = 0;
      }

      this.$axios.get(this.$domain+'/api/news?page='+page).then((data) => {
        this.news = data.data.news;

        if (data.data.page === 1) {
          this.backBtn = true;
          this.nextBtn = false;
        }

        if (data.data.page === data.data.pages) {
          this.backBtn = false;
          this.nextBtn = true;
        }
      });
    },
    addNews() {
      this.$axios.post(this.$domain+'/api/news', {
        title: this.title,
        description: this.description
      }).then((data) => {
       alert('!!!');
      })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  components: {
    card,
    newItem
  },
}
</script>
