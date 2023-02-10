<template>
  <div>
    <b-container>
      <Sidebar />
      <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </b-container>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
export default {
  components: {
    Sidebar
  },
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
  body {
    background: #edf2f9;
  }
</style>
