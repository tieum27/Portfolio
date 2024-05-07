<script>
export default {
  props: ["setActivePage", "activePage"],
  data() {
    return {
      menu: [
        {
          id: 1,
          name: "Home",
          icon: "house-chimney",
        },
        {
          id: 2,
          name: "About",
          icon: "address-card",
        },
        {
          id: 3,
          name: "Portfolio",
          icon: "briefcase",
        },
        {
          id: 4,
          name: "Contact",
          icon: "envelope-open",
        },
      ],
    };
  },
};
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="el in menu"
        :key="el.id"
        @click="setActivePage(el.id)"
        :class="{
          active: activePage === el.id ? true : false,
          'animate__animated animate__fadeIn':
            activePage === el.id ? true : false,
        }"
      >
        <button class="d-flex align-items-center">
          <div class="icon col-3">
            <font-awesome-icon :icon="['fas', el.icon]" />
          </div>
          <h4 class="ms-2 col-9">{{ el.name }}</h4>
        </button>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss">
@import './assets/css/_variables.scss';

nav {
  padding: 5px 5px;
  color: white;
  background-color: $gray-10;
  border-radius: 15px;
  max-width: 200px;
  margin: auto 2rem;
  font-size: 0.9rem;
  position: fixed;
  left: 0%;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 5;
  &:hover {
    min-width: 250px;
    ul {
      align-items: flex-start;
      h4 {
        display: block;
      }
    }
    .active {
      &:not(:hover) {
        button,
        .icon {
          background-color: $gray-light;
        }
      }
    }
  }

  .active {
    .icon {
      background-color: $secondary;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      // width: 170px;
      margin-bottom: 1rem;
      button {
        // padding: 0.3rem 0.8rem 0.3rem 0;
        border: none;
        cursor: pointer;
      }
      h4 {
        display: none;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 0;
      }
    }
  }
}
.icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
}
@media screen and (max-width: 991px) {
  nav {
    height: 60px;
    left: 0;
    right: auto;
    bottom: 0;
    top: auto;
    transform: none;
    width: 100%;
    max-width: unset;
    margin: unset !important;
    display: block;
    padding: 0 0.5rem;
    z-index: 10;
    background: #fff;
    background-color: $gray-10;
    box-shadow: 0 0 47px #dedede;
    // -ms-transform: translateY(80%);
    // transform: translateY(80%);

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      li {
        margin: 0 !important;
        width: unset !important;
      }
    }
  }
}
@media screen and (min-width: 992px) {
  nav {
    ul {
      li {
        width: 100%;
        margin-bottom: 1rem;
        button {
          text-decoration: none;
          text-align: center;
          text-transform: uppercase;
          background-color: none;
          cursor: pointer;
          border-radius: 15px;
          width: 100%;
          display: flex;
          align-items: center;
        }
        h4 {
          display: none;
        }
        button:hover {
          background: $secondary;
          .icon {
            background-color: transparent;
          }
        }
      }
    }
  }
}
</style>
