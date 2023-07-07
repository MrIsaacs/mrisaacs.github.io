import de from './locales/de-AT.json'

export default defineI18nConfig(() => ({
  defaultLocale: 'de',
  langDir: './locales',
  locale: 'de',
  lazy: {
    skipNuxtState: true
  },
  messages: {
    de
  },
  parsePages: false,
  strategy: 'prefix_except_default',
  vueI18n: {
    legacy: false
  }
}))
