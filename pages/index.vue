<template>
  <div>
    <Dashboard />
  </div>
</template>

<script>
import Dashboard from '@/components/home/Dashboard'
export default {
  components: {
    Dashboard
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
  .heading {
    display: inline-block;
    span {
      font-size: 18px;
      font-weight: 600;
    }
    a {
      font-size: 14px;
      padding-top: 2px;
      color: $base-color;
    }
  }
</style>
