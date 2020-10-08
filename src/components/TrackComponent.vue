<template>
  <div class="instruments">
    <div class="instrument">
      <img :src="this.track.icon()" />
      <dl>
        <dt>Volume</dt>
        <dd>
          <input type="range" min="0" max="1" step="0.1" v-model="volume" />{{
            volume
          }}
        </dd>
        <dt>Pan</dt>
        <dd>
          <input type="range" min="-1" max="1" step="0.1" v-model="pan" />{{
            pan
          }}
        </dd>
      </dl>
    </div>
    <div class="instrument">
      <dl>
        <dt>Overdrive</dt>
        <dd>
          <input type="checkbox" v-model="toggleOverdrive" />
          <input type="range" min="0" max="1" step="0.1" v-model="overdrive" />
        </dd>
      </dl>
    </div>
    <div class="instrument">
      <dl>
        <dt>Delay</dt>
        <dd>
          <input type="checkbox" v-model="toggleDelay" />
          <input type="range" min="0" max="1000" step="100" v-model="delay" />
        </dd>
      </dl>
    </div>
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
        // FIXME: never called when updated!
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
    },
    overdrive: {
      get() {
        return 0;
      },
      set(value) {
        this.$store.commit("updateOverdrive", [this.track.id, value]);
      }
    },
    delay: {
      get() {
        return 1;
      },
      set(value) {
        this.$store.commit("updateDelay", [this.track.id, value]);
      }
    },
    pan: {
      get() {
        return 0;
      },
      set(value) {
        this.$store.commit("updatePan", [this.track.id, value]);
      }
    },
    toggleOverdrive: {
      get() {
        return false;
      },
      set(value) {
        console.log("toggleOverdrive");
        this.$store.commit("toggleOverdrive", this.track.id);
      }
    },
    toggleDelay: {
      get() {
        return false;
      },
      set(value) {
        this.$store.commit("toggleDelay", this.track.id);
      }
    }
  }
};
</script>

<style scoped>
.instruments {
  border: solid 1px;
  margin-top: -1px;
  display: flex;
}
.instruments img {
  width: 100px;
  height: 100px;
}
.instrument {
  background-color: #eee;
  margin: 1em;
}
</style>
