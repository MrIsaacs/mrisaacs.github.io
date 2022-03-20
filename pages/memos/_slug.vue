<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1 id="main-title">
        <p>{{ memo.title }}</p>
      </h1>
      <p id="main-date" :title="[memo.createdAt, memo.updatedAt]">
        {{ $moment(memo.createdAt).fromNow() }},
        <strong>update:</strong>
        {{ $moment(memo.updatedAt).fromNow() }}
      </p>
      <p id="main-body">
        <nuxt-content :document="memo" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const memo = await $content('memos', params.slug).fetch()
    return { memo }
  },
  head () {
    return {
      title: `${this.memo.category}: ${this.memo.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.memo.description }
      ]
    }
  },
  methods: {
    track () {
      this.$gtag.pageview({
        page_title: `${this.memo.category}: ${this.memo.title}`,
        page_path: this.memo.path,
        page_location: `https://mrisaacs.org${this.memo.path}`
      })
    }
  }
}
</script>
