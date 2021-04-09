<template>
  <div class="container">
    <div class="wrapper">
      <app-message></app-message>
      <h2 class="title">Contact Us</h2>
      <app-form></app-form>
      <div class="right-block">
        <p>
          Please tell us more about your request and give us info about your
          company and country
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppForm from "./AppForm.vue";
import AppMessage from "./ui/AppMessage.vue";
export default {
  components: { AppForm, AppMessage },
};
</script>

<style lang="scss" scoped>
$primary: #fff;

.container {
  background: url("~@/assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 94px;
    padding-left: 50px;
    padding-bottom: 50px;
    .title {
      font-size: 34px;
      font-weight: 300;
      color: $primary;
      margin-bottom: 37px;
    }
    .right-block {
      display: flex;
      flex-direction: row-reverse;
      position: absolute;
      left: 50%;
      margin-top: 44px;
      max-width: 540px;
      p {
        font-size: 18px;
        line-height: 1.889;
        font-weight: bold;
      }
    }
  }
}
@media (max-width: 1250px) {
  .right-block {
    flex-direction: column !important;
    position: initial !important;
  }
}
@media (max-width: 480px) {
  .wrapper {
    padding-top: 30px !important;
    padding-left: 30px !important;
    .title {
      font-size: 24px !important;
      margin-bottom: 25px !important;
    }
  }
}
</style>

