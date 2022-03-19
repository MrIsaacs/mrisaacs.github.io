<template>
  <div>
    <div
      v-for="(quote, index) in quotes"
      :key="index"
      class="short-article one-third column"
    >
      <h3>
        <NuxtLink :to="quote.path">
          {{ quote.title }}
        </NuxtLink>
      </h3>
      <p>{{ quote.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'list',
  async asyncData ({ $content }) {
    const quotes = await $content('quotes')
      .sortBy('position', 'desc')
      .fetch()
    return { quotes }
  },
  head () {
    return {
      title: 'Zitatenliste',
      meta: [
        { hid: 'description', name: 'description', content: 'Eine Kollektion von Zitaten.' }
      ]
    }
  }
}
</script>
