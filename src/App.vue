<template>
  <top-block></top-block>
  <map-block></map-block>
  <footer-block></footer-block>
</template>

<script>
import FooterBlock from "./components/FooterBlock.vue";
import MapBlock from "./components/MapBlock.vue";
import TopBlock from "./components/TopBlock.vue";

export default {
  name: "App",
  components: {
    TopBlock,
    MapBlock,
    FooterBlock,
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "SuisseIntl";
  src: local("SuisseIntl"), local("SuisseIntl"),
    url("~@/fonts/SuisseIntl-Light.woff") format("woff"),
    url("~@/fonts/SuisseIntl-Light.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
}
body,
html {
  box-sizing: border-box;
  font-family: "SuisseIntl", sans-serif;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.alert {
  padding: 1rem 1.5rem;
  width: 25%;
  border-left-width: 0.5rem;
  border-left-style: solid;
  margin: 1rem 0;
  position: relative;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}

.alert.primary {
  border-color: black;
  background-color: #f8f8f8;
}

.alert.danger {
  border-color: #e53935;
  background-color: #f8f8f8;
}
.alert p {
  color: #222;
  line-height: 1.7;
}
.alert-title {
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: -0.4rem;
  color: #222;
}
.alert-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 480px) {
  .alert-close {
    position: absolute;
    top: -5px;
    right: 2px;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>

