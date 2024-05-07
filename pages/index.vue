<script>
import Home from "../components/tabs/Home.vue";
import About from "../components/tabs/About.vue";
import Portfolio from "../components/tabs/Portfolio.vue";
import Contact from "../components/tabs/Contact.vue";
export default {
  name: "IndexPage",
  props: ["activePage", "setShowModal", "setPortfolioDetails"],
  components: { Home, About, Portfolio, Contact },
  methods: {
    isActive(pageNumber) {
      const active = this.activePage === pageNumber ? true : false;
      return active;
    },
  },
};
</script>

<template>
  <main class="tab-content">
    <Home :isActive="isActive(1)" :setShowModal="setShowModal" />
    <About :isActive="isActive(2)" />
    <Portfolio
    :isActive="isActive(3)"
    :setPortfolioDetails="setPortfolioDetails"
    />
    <Contact :isActive="isActive(4)" />
  </main>
</template>

<style lang="scss">
.tab-content > .page {
  display: none;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-transition: opacity 2s ease-out;
  -moz-transition: opacity 2s ease-out;
  -o-transition: opacity 2s ease-out;
  transition: opacity 2s ease-out;
}

.tab-content > .active-page {
  display: block;
  opacity: 1;
  visibility: visible;
  // animation: scaleDownUp 0.5s ease both;
  overflow: hidden;
}

main {
  display: flex;
  overflow: hidden;
  min-height: calc(100vh - 40px);
}
</style>
