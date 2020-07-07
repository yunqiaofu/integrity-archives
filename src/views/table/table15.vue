<template>
  <el-input
    v-model="other"
    type="textarea"
    :rows="20"
    placeholder="请输入内容"
  />
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    other: {
      get: function () {
        return this.$store.getters.getOther
      },
      set: function (newValue) {
        this.$store.dispatch('updateOther', newValue)
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
