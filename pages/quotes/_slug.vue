<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1 id="main-title">
        <p>{{ quote.title }}</p>
      </h1>
      <p id="main-date" :title="[quote.createdAt, quote.updatedAt]">
        {{ $moment(quote.createdAt).fromNow() }},
        <strong>update:</strong>
        {{ $moment(quote.updatedAt).fromNow() }}
      </p>
      <p id="main-body">
        <nuxt-content :document="quote" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const quote = await $content('quotes', params.slug).without(['excerpt']).fetch()
    return { quote }
  }
}
</script>
