<template>
  <footer class="app-footer">
    <a  href="http://coreui.io">CoreUI</a> &copy; 2017 creativeLabs.
    <span ref="www" class="float-right">Powered by
      <a href="http://coreui.io">CoreUI</a>
    </span>
    <slot name="wbl">
      there is nothing to show
    </slot>
  </footer>
</template>
<script>
export default {
  name: 'footer',
  mounted:function(){
    console.log(this.$refs.www,this)
  }
}
</script>
