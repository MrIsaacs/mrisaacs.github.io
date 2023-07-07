<script setup lang="ts">
import moment from 'moment';

const { name: routeName } = useRoute()
const { t } = useI18n()
const { $ucfirst: ucfirst } = useNuxtApp()
const query: QueryBuilderParams = {
  path: '/memos',
  sort: [{ position: -1 }]
}

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
  title: t('memoList'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('memoDescription')
    }
  ]
})
</script>

<template>
  <main>
    <ContentList :query="query" v-slot="{ list }">
      <section id="article-list">
        <header>
          <h1>{{ $t('memoList') }}</h1>
        </header>
        <ul>
          <li
            v-for="change in list"
            :key="change._id"
          >
            <h2 style="padding-left:0;"><NuxtLink :to="change._path">{{ change.title }}</NuxtLink></h2>
            <section class="listitem-timestamp">
              <i><b>{{ $t('created') }}</b></i> <time :datetime="change.createdAt" :title="change.createdAt">
                {{ moment(change.createdAt).fromNow() }}
              </time>, <i><b>{{ $t('updated') }}</b></i> <time :datetime="change.updatedAt" :title="change.updatedAt">
                {{ typeof change.updatedAt==='string' ? moment(change.updatedAt).fromNow() : moment(change.updatedAt[change.updatedAt.length-1]).fromNow() }}
              </time>
            </section>
            <p>{{ breakWord(change.description) }}</p>
          </li>
        </ul>
      </section>
    </ContentList>
  </main>
</template>
