<template>
  <div class="instrument">
    <img :src="this.track.icon()" />
  </div>
</template>

<script>
import { Track } from "../store/Track";

export default {
  name: "TrackComponent",
  props: {
    track: Track
  }
};
</script>

<style scoped>
div {
  background-color: azure;
}
.instrument img {
  width: 100px;
  height: 100px;
}
</style>
