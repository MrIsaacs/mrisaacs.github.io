<template>
  <div>
    <div
      v-for="(memo, index) in memos"
      :key="index"
      class="short-article one-third column"
    >
      <h3>
        <NuxtLink :to="memo.path">
          {{ memo.title }}
        </NuxtLink>
      </h3>
      <p>{{ memo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'list',
  async asyncData ({ $content }) {
    const memos = await $content('memos')
      .sortBy('position', 'desc')
      .fetch()
    return { memos }
  },
  head () {
    return {
      title: 'Memoliste',
      meta: [
        { hid: 'description', name: 'description', content: 'Eine Kollektion von Memoranden.' }
      ]
    }
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_title: 'Memoliste',
        page_path: this.memos.path,
        page_location: 'https://mrisaacs.org/memos'
      })
    }
  }
}
</script>
