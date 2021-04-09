<template>
  <p class="address__name">Kuiv, Stepan Bandera, 33</p>
  <span class="address__code">02066</span>
  <span class="address__code">Ukraine</span>
</template>

<script>
export default {};
</script>

<style lang="scss">
.address__name {
  font-size: 11px;
  margin-bottom: 5px;
}
.address__code {
  display: block;
  font-size: 11px;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>