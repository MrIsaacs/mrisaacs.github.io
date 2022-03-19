<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1 id="main-title">
        <p>{{ article.title }}</p>
      </h1>
      <p id="main-date" :title="[article.createdAt, article.updatedAt]">
        {{ $moment(article.createdAt).fromNow() }},
        <strong>update:</strong>
        {{ $moment(article.updatedAt).fromNow() }}
      </p>
      <p id="main-body">
        <nuxt-content :document="article" />
      </p>
    </div>
    <ShimmerLayer />
  </div>
</template>

<script>
import ShimmerLayer from '~/components/ShimmerLayer.vue'

export default {
  components: { ShimmerLayer },
  async asyncData ({ $content }) {
    const article = await $content('werdegang').fetch()
    return { article }
  }
  // ,
  // transitions: 'fade'
}
</script>
