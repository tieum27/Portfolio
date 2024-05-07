<script>
export default {
  name: "HomePage",
  props: ["isActive", "setShowModal"],
};
</script>

<template>
  <div
    class="page homepage fade"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="container-fluid">
      <div class="content-wrapper row">
        <div class="details col-12 col-lg-8">
          <div>
            <img
              class="img-mobile"
              :src="require('@/assets/my-portrait.jpg')"
            />
            <h1>
              Matthieu Tripoli.
              <span>Frontend Developer</span>
            </h1>
            <p>
              Bilingual (French/English) full stack developer with experience in team management, 
              project management, and staff training. Passionate about streamlining processes and 
              increasing efficiency within teams. Enjoys the detective work of finding the problem in a mountain of code. 
              One who embraces challenging environments and complex problem solving.
            </p>
            <button class="button" @click="setShowModal">
              <span class="btn-text">See more</span>
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="btn-icon"
              />
            </button>
          </div>
        </div>
        <div class="portrait col-12 ms-auto cod"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './assets/css/_variables.scss';

.homepage {
  position: relative;
  .content-wrapper {
    position: relative;
    display: flex;
    height: calc(100vh - 100px);
    width: 100%;
    padding: 0 1.5rem 0 0;
    align-items: center;
    & > * {
      padding-left: 15px;
      padding-right: 15px;
    }
    .details {
      & > div {
        max-width: 550px;
        margin: 0 auto;
      }

      & > div {
        display: flex;
        flex-direction: column;
        .button {
          align-self: flex-end;
        }
      }
      h1 {
        display: flex;
        position: relative;
        flex-direction: column;
        text-transform: uppercase;
        font-size: 45px;
        line-height: 62px;
        font-weight: 700;
        margin: 18px 0 10px;
        color: $gray-10;

        & > span {
          color: $black;
          text-transform: capitalize;
          font-size: 30px;
        }
      }
      p {
        margin: 15px 0 28px;
        font-size: 16px;
        line-height: 35px;
      }

    }
    .portrait {
      display: none;
      height: 400px;
      width: 400px;
      right: 20px;
      position: fixed;
      border-radius: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      background-image: url("@/assets/my-portrait.jpg");
    }
  }
}

.fade {
  transition: opacity 0.15s linear;
}

@media screen and (max-width: 991px) {
  .img-mobile {
    display: block !important;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    border: 4px solid #252525;
    margin: 0 auto 25px;
  }
}
@media (min-width: 992px) {
  .homepage {
    .content-wrapper {
      .portrait {
        display: block;
      }
    }
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .homepage {
    .content-wrapper {
      .details {
        h1 {
          font-size: 42px;
          line-height: 52px;
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .homepage {
    .details {
      h1 {
        padding-left: 0 !important;
      }
    }
  }
}

@media (min-width: 1600px) {
  .homepage {
    .details > div {
      max-width: 600px;
    }
  }
}

</style>