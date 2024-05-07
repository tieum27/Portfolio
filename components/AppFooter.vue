<template>
  <footer>
    <p>© {{ new Date().getFullYear() }} Matthieu Tripoli.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import './assets/css/_variables.scss';

footer {
  width: 100%;
  height: 50px;
  z-index: 5;
  padding: 10px 30px;
  color: $primary;
  text-align: center;
}
</style>
