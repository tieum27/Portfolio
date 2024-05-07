<script>
export default {
  name: "TechStackCard",
  props: ["text", "logo"],
  data() {
    return {
      isHover: false,
    };
  },
};
</script>

<template>
  <div
    class="techStack-card"
    :class="{
      'animate__animated animate__heartBeat': isHover,
    }"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <img :src="logo" :alt="text" />
  </div>
</template>

