<script>
import PageHeader from "../PageHeader.vue";

export default {
  name: "ContactPage",
  props: ["isActive"],
  components: { PageHeader },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isLoading: false,
      instagramLogo: require("@/assets/img/svg/instagram.svg"),
      linkedinLogo: require("@/assets/img/svg/linkedin.svg"),
      gitHubLogo: require("@/assets/img/svg/github.svg"),
    };
  },
  methods: {
    handleFormSubmit() {
      this.isLoading = true;
      fetch("https://formsubmit.co/ajax/mail@matthieutripoli.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.$swal(
            "Thank You!",
            "I appreciate you taking the time to reach out!",
            "success"
          );
          this.name = "";
          this.subject = "";
          this.message = "";
          this.email = "";
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.$swal("Something went wrong!", "Please try again!", "error");
        });
    },
  },
};
</script>

<template>
  <div
    class="page contactpage"
    :class="{
      'active-page': isActive,
      'animate__animated animate__zoomIn': isActive,
    }"
  >
    <div class="page-wrapper">
      <PageHeader :title="'Get in touch'" :secondaryTitle="'contact'" />
      <div class="row">
        <div class="contact col-12 col-lg-5 addr">
          <h3>REACH OUT!</h3>
          <p>
            You can get in touch with me. I am open to discussing new projects
            or improving on existing ones, creative collaborations or
            opportunities to explore the boundless possibilities of software
            design.
          </p>
          <address>
            <font-awesome-icon :icon="['fas', 'map']" />
            <h5>Address Point</h5>
            <p>Ars-en-Re, France.</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <h5>Send a mail</h5>
            <p>mail@matthieutripoli.com</p>
          </address>
          <address>
            <font-awesome-icon :icon="['fas', 'square-phone']" />
            <h5>Call</h5>
            <p>+33652229126</p>
          </address>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/matthieu-tripoli"
                target="_blank"
                ><img :src="linkedinLogo"
              /></a>
            </li>
            <li>
              <a href="https://github.com/tieum27" target="_blank"
                ><img :src="gitHubLogo"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <form class="contactform" @submit.prevent="handleFormSubmit">
            <div class="row">
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="name"
                    placeholder="Enter Name"
                    name="name"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-6">
                <div class="form-group">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12 col-lg-12">
                <div class="form-group">
                  <input
                    type="text"
                    v-model="subject"
                    placeholder="Subject"
                    name="subject"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    type=""
                    v-model="message"
                    placeholder="Type a message..."
                    rows="5"
                    name="message"
                    aria-required="true"
                  ></textarea>
                </div>
              </div>
              <div class="col-12">
                <button class="button" :disabled="isLoading">
                  <div v-if="isLoading">
                    <span>Loading...</span>
                    <font-awesome-icon
                      :icon="['fas', 'spinner']"
                      class="btn-icon spin"
                    />
                  </div>
                  <div v-else>
                    <span class="btn-text">Send Message</span>
                    <font-awesome-icon
                      :icon="['fas', 'paper-plane']"
                      class="btn-icon"
                    />
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/css/_variables.scss';

input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.contactpage {
  .contact {
    & > p {
      margin-bottom: 1.5rem;
    }
    & > h3 {
      font-size: 26px;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: 1rem;
    }
  }
  address {
    font-weight: 600;
    padding-left: 50px;
    line-height: 25px;
    padding-top: 5px;
    margin-bottom: 20px;
    position: relative;
    & > svg {
      color: $primary;
      left: 0;
      top: 10px;
      font-size: 33px;
      display: inline-block;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      position: absolute;
    }
    & > h5 {
      text-transform: uppercase;
      opacity: 0.8;
      font-weight: 400;
      padding-bottom: 0;
    }
  }
  .row > * {
    padding-left: 15px;
    padding-right: 15px;
  }

  .addr {
    ul {
      display: flex;
      margin-bottom: 20px;
      li {
        margin-right: 1rem;
        padding: 5px;
        background-color: $gray-600;
        border-radius: 50%;
        &:hover {
          padding: 0;
          background-color: transparent;
          img {
            width: 40px;
            height: 40px;
            -webkit-filter: unset;
            filter: unset;
          }
        }
      }
      img {
        width: 30px;
        height: 30px;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
      }
    }
  }
  .contactform {
    .form-group {
      margin-bottom: 30px;
    }

    input[type="text"],
    input[type="email"] {
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
      width: 100%;
      padding: 11px 26px;
      border-radius: 30px;
      outline: none !important;
      transition: 0.3s;
      &:focus {
        border: 1px solid $primary;
      }
    }

    textarea {
      border: 1px solid #ddd;
      width: 100%;
      padding: 12px 26px;
      height: 200px;
      overflow: hidden;
      border-radius: 30px;
      outline: none !important;
      transition: 0.3s;
      resize: none;
      &:focus {
        border: 1px solid $primary;
      }
    }
  }
}

</style>