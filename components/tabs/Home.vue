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

