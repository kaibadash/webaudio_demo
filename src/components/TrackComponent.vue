<template>
  <div>TrackComponent: {{ track.toString() }}</div>
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
</style>
