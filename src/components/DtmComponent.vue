<template>
  <div>
    <button v-on:click="play()">play</button>
    <button v-on:click="stop()">stop</button>
    <div v-for="track in this.$store.state.tracks" :key="track.id">
      <TrackComponent :track="track" :key="track.id" />
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
      this.$store.commit("play", ["drum.m4a", "bass.m4a", "guitar.m4a", "vocal.m4a"]);
    },
    stop: function() {
      console.log("stop");
      this.$store.commit("stop");
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },
  }
};
</script>

<style scoped></style>
