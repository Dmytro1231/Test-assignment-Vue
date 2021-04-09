<template>
  <div class="container">
    <div class="left-block">
      <div class="wrapper">
        <h2 class="title">Our Offices</h2>
        <div class="tab-container">
          <app-button
            :color="active === 'one' ? 'primary' : ''"
            @action="active = 'one'"
            >Kyiv</app-button
          >
          <app-button
            :color="active === 'two' ? 'primary' : ''"
            @action="active = 'two'"
            >New York</app-button
          >
          <app-button
            :color="active === 'third' ? 'primary' : ''"
            @action="active = 'third'"
            >Guanqzhou</app-button
          >
          <app-button
            :color="active === 'fourth' ? 'primary' : ''"
            @action="active = 'fourth'"
            >Barcelona</app-button
          >
        </div>
        <p class="title-address">Global Message Services Ukraine LLC</p>
        <div class="adress-block">
          <component :is="componentName"></component>
        </div>
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
import AppButton from "./tabs/AppButton.vue";
import AppTextOne from "./tabs/AppTextOne";
import AppTextTwo from "./tabs/AppTextTwo";
import AppTextThird from "./tabs/AppTextThird";
import AppTextFourth from "./tabs/AppTextFourth";

export default {
  data() {
    return {
      active: "one",
    };
  },
  computed: {
    componentName() {
      return "app-text-" + this.active;
    },
  },
  components: {
    AppButton,
    AppTextOne,
    AppTextTwo,
    AppTextThird,
    AppTextFourth,
  },
};
</script>

<style lang="scss" scoped>
$primary: #fff;
$bg: #262626;

.container {
  display: flex;
  justify-content: center;
  height: 500px;
  .map {
    background: url("~@/assets/sample.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    width: 100%;
    height: 100%;
  }
}
.left-block {
  background: $bg;
  width: 100%;
  .wrapper {
    padding: 40px;
    color: $primary;
    .title {
      font-size: 34px;
      font-weight: 300;
      margin-bottom: 28px;
    }
    .tab-container {
      margin-bottom: 40px;
      display: inline-flex;
    }
    .title-address {
      margin-bottom: 32px;
      font-size: 26px;
      letter-spacing: 0.9px;
    }
  }
}
@media (max-width: 1250px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 480px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
  .wrapper {
    padding: 20px !important;
    .title {
      font-size: 24px !important;
    }
    .tab-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title-address {
      margin-bottom: 20px !important;
      font-size: 21px !important;
    }
  }
  .map {
    height: 100%;
  }
}
</style>