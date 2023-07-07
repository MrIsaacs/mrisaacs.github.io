<script setup lang="ts">
import moment from 'moment';

const { name: routeName } = useRoute()
const { t } = useI18n()
const { $ucfirst: ucfirst } = useNuxtApp()

const breakWord = (str, limit = 80) => {
  const nString = `${str.substring(0, limit)}${str.substring(limit, limit + 10).split(' ')[0]}`
  const l = nString.length
  return l < limit ?
    str :
    `${nString}...`
}

definePageMeta({
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  }
})

useHead({
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: ''
    }
  ]
})
</script>

<template>
  <main>
    <ContentDoc v-slot="{ doc }" :path="$route.path">
      <article>
        <header>
          <h1>{{ doc.title }}</h1>
          <section id="article-timestamp">
            <i><b>{{ $t('created') }}</b></i> <time :datetime="doc.createdAt" :title="doc.createdAt">
              {{ moment(doc.createdAt).fromNow() }}
            </time><br class="bigScreen"/><span class="mobileScreen">, </span><i><b>{{ $t('updated') }}</b></i> <time :datetime="doc.updatedAt" :title="doc.updatedAt">
              {{ typeof doc.updatedAt==='string' ? moment(doc.updatedAt).fromNow() : moment(doc.updatedAt[doc.updatedAt.length-1]).fromNow() }}
            </time>
          </section>
        </header>
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>
