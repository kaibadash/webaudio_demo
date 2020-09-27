<template>
  <div>
    <div v-for="audio in audios" :key="audio">
      DtmComponent: {{ audio }}
      <TrackComponent :audio="audio" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AudioService } from "../services/AudioService";
import TrackComponent from "./TrackComponent.vue";

export default defineComponent({
  name: "DtmComponent",
  props: {},
  components: {
    TrackComponent
  },
  data: () => {
    return {
      audios: ["piano.m4a", "drum.m4a", "bass.m4a"]
    };
  },
  mounted: async () => {
    const service = new AudioService();
    //await service.test();
  }
});
</script>

<style scoped></style>
