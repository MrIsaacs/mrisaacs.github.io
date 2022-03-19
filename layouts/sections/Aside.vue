<template>
  <div class="one-third column">
    <a class="avatar-wrapper">
      <img class="avatar color" alt="MrIsaacs Avatar" src="~/assets/img/564203718b24c4a02e62c5b624e4d58b214.png">
      <img class="avatar bw" alt="MrIsaacs Avatar" src="~/assets/img/564203718b24c4a02e62c5b624e4d58b2.png">
      <!-- p class="info">posted 3 hours ago in general</p -->
    </a>
    <div id="profile">
      <h2>{{ profile.title }}</h2>
      <hr>
      <div id="social-links">
        <ul class="zmdi-hc-ul">
          <li
            v-for="(link, index) in socialLinks"
            :key="index"
            class="icon"
            :class="link.icon"
          >
            <a :href="link.url" target="_blank">
              <span>{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div style="clear:both;" />
      <hr>
      <h2>{{ profile.language.title }}</h2>
      <hr>
      <div id="languages">
        <ul class="zmdi-hc-ul">
          <li
            v-for="(knowledge, index) in profile.language.knowledge"
            :key="index"
          >
            <span>{{ knowledge.title }}</span>
            <div class="know-how">
              <i
                v-for="i in 3"
                :key="i"
                class="zmdi zmdi-hc-fw zmdi-hc-2x"
                :class="(i <= knowledge.amount) ? profile.language.fullCircleIcon : profile.language.emptyCircleIcon"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      socialLinks: [{
        icon: 'pin',
        title: '23.06.1987 in Serbien',
        url: 'https://goo.gl/maps/opoa6bMEH7v'
      }, {
        icon: 'home',
        title: 'Wien, Österreich',
        url: 'https://goo.gl/maps/sdhFqPfX66y'
      }, {
        icon: 'github',
        title: 'MrIsaacs',
        url: 'https://github.com/mrisaacs'
      }, {
        icon: 'linkedin',
        title: 'Ivan Ilić',
        url: 'https://www.linkedin.com/in/ivan-ili%C4%87-465b9a22/'
      }],
      profile: {
        title: 'Persönliches',
        language: {
          title: 'Sprachen',
          fullCircleIcon: 'zmdi-circle',
          emptyCircleIcon: 'zmdi-circle-o',
          knowledge: [{
            title: 'Deutsch',
            amount: 3
          }, {
            title: 'Englisch',
            amount: 2
          }, {
            title: 'Serbisch',
            amount: 2
          }]
        }
      }
    }
  }
}
</script>
