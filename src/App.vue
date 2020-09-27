<template>
  <DtmComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DtmComponent from "./components/DtmComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    DtmComponent
  }
});
</script>

<style></style>
