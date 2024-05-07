<script>
export default {
  name: "PortfolioCard",
  props: ["avatar", "title", "description"],
};
</script>

<template>
  <figure class="portfolio-card">
    <img :src="avatar ? require('@/assets/img/' + avatar) : require('@/assets/portfolio-card.jpg')" />
    <div class="content-title">
      <div>
        <h6>{{ title }}</h6>
        <p>{{ description }}</p>
      </div>
    </div>
  </figure>
</template>

<style lang="scss">
.portfoliopage {
  .projects-list {
    margin: 0 auto;
    justify-content: center;
    padding: 0;
    li {
      width: 33.333333%;
      float: left;
      cursor: pointer;
      padding: 15px;
    }
  }
}

@media screen and (max-width: 576px) {
  .portfoliopage {
    .projects-list {
      li {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .portfoliopage {
    .projects-list {
      grid-template-columns: none !important;
      padding: 0 !important;
    }
  }
}

@media screen and (min-width: 577px) and  (max-width: 1200px) {
  .portfoliopage {
    .projects-list {
      li {
        width: 50%;
      }
    }
  }
}

@media screen and (min-width: 1300px) {
  .portfoliopage {
    .projects-list {
      figure {
        min-height: 212px;
        background: #ddd;
      }
    }
  }
}
</style>