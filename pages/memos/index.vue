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
  }
  // ,
  // transitions: 'fade'
}
</script>
