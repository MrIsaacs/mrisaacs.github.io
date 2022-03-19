<template>
  <div class="main-article two-thirds column">
    <div class="article-layer">
      <h1 id="main-title">
        <p>{{ project.title }}</p>
      </h1>
      <p id="main-date" :title="[project.createdAt, project.updatedAt]">
        {{ $moment(project.createdAt).fromNow() }},
        <strong>update:</strong>
        {{ $moment(project.updatedAt).fromNow() }}
      </p>
      <p id="main-body">
        <nuxt-content :document="project" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const project = await $content('projects', 'projekte').fetch()
    return { project }
  },
  head () {
    return {
      title: `${this.project.title}`,
      meta: [
        { hid: 'description', name: 'description', content: this.project.description }
      ]
    }
  }
}
</script>
