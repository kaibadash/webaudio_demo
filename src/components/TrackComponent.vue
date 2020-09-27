<template>
  <div>TrackComponent: {{ audio }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TrackComponent",
  props: {
    audio: String
  },
  mounted: async () => {
    [
      
    ]
  }
});
</script>

<style scoped>
div {
  background-color: azure;
}
</style>
