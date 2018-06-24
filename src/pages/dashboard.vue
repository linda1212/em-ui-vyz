<template>
  <div class="msg">{{msg}}</div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      msg: 'this is dashboard'
    }
  }
}
</script>

<style scoped lang="less">
  @color:red;
  .msg {
    background:@color;
  }
</style>
