<template>
  <div class="instrument">
    <img :src="this.track.icon()" />
    <input type="range" min="0" max="1" step="0.1" v-model="volume" />{{
      volume
    }}
  </div>
</template>

<script>
import { Track } from "../store/Track";

export default {
  name: "TrackComponent",
  props: {
    track: Track
  },
  methods: {},
  computed: {
    volume: {
      get() {
        console.log("get computed volume", this.track);
        if (this.track == null) {
          return 1;
        }
        return this.track.volume();
      },
      set(value) {
        console.log("set vol", value);
        this.$store.commit("updateVolume", [this.track.id, value]);
      }
    }
  }
};
</script>

<style scoped>
.instrument {
  border: solid 1px;
  margin-top: -1px;
}
.instrument img {
  width: 100px;
  height: 100px;
}
</style>
