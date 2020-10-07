<template>
  <div>
    <button v-on:click="play()">play</button>
    <button v-on:click="stop()">stop</button>
    <div v-for="track in this.$store.state.tracks" :key="track">
      <TrackComponent :track="track" />
    </div>
  </div>
</template>

<script>
import TrackComponent from "./TrackComponent.vue";
import { Track } from "../store/Track";

export default {
  name: "DtmComponent",
  props: {},
  components: {
    TrackComponent
  },
  data: () => {
    return {};
  },
  mounted: async function() {
    ["piano.m4a", "drum.m4a", "bass.m4a"].forEach(async audioName => {
      this.$store.state.tracks.push(await Track.init(audioName));
    });
  },
  methods: {
    play: function() {
      console.log("play");
    },
    stop: () => {
      console.log("stop");
    }
  }
};
</script>

<style scoped></style>
