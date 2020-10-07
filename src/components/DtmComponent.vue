<template>
  <div>
    <button v-on:click="play()">play</button>
    <button v-on:click="stop()">stop</button>
    <div v-for="track in this.$store.state.tracks" :key="track.audioPath">
      <TrackComponent :track="track" :key="track.audioPath" />
    </div>
  </div>
</template>

<script>
import TrackComponent from "./TrackComponent.vue";

export default {
  name: "DtmComponent",
  props: {},
  components: {
    TrackComponent
  },
  data: () => {
    return {};
  },
  mounted: async () => {},
  methods: {
    play: function() {
      console.log("play");
      this.$store.commit("play", ["piano.m4a", "drum.m4a", "bass.m4a"]);
    },
    stop: function() {
      console.log("stop");
      this.$store.commit("stop");
    }
  }
};
</script>

<style scoped></style>
