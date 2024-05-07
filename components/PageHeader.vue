<script>
export default {
  name: "PageHeader",
  props: ["title", "secondaryTitle"],
};
</script>

<template>
  <div class="page-title">
    <h1 class="page-title-main">
      {{ title.split(" ").slice(0, -1).join(" ") }}
      <span>{{ title.split(" ").pop() }}</span>
    </h1>
    <div class="page-title-secondary">{{ secondaryTitle }}</div>
  </div>
</template>

<style scoped lang="scss">
@import './assets/css/_variables.scss';

.page {
  width: 100%;
  padding-bottom: 30px;
  top: 0;
  left: 0;

  .page-title {
    display: flex;
    width: 100%;
    position: relative;
    padding: 80px 0;
    height: 77px;
    text-transform: uppercase;
    .page-title-secondary {
      font-size: 110px;
      left: 0;
      text-align: center;
      letter-spacing: 10px;
      line-height: 0.7;
      position: absolute;
      top: 50%;
      right: 0;
      text-transform: uppercase;
      font-weight: 800;
      transform: translateY(-50%);
      color: rgba($color: $secondary, $alpha: 0.5);
    }
    h1 {
      z-index: 2;
      font-size: 56px;
      font-weight: 900 !important;
      width: 100%;
      text-align: center;
      top: 50%;
      line-height: 0.1;
      transform: translateY(-50%);
      color: $gray-600;
      span {
        color: $primary;
      }
    }
  }
}
</style>