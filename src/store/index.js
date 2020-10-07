import Vue from "vue";
import Vuex from "vuex";
import { Track } from "./Track";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tracks: [],
    count: 0,
    now: "",
    message: "init"
  },
  mutations: {
    async play(state, audios) {
      for (let audio of audios) {
        console.log("load audio", audio);
        const track = await Track.init(audio);
        state.tracks.push(track);
      }
      state.tracks.forEach(track => {
        console.log("Start track", track);
        track.play();
      });
    },
    stop(state) {
      state.tracks.forEach(track => {
        track.stop();
      });
    },
    updateVolume(state, params) {
      const trackId = params[0];
      const volume = params[1];
      console.log("updateVolume", trackId, volume, state.tracks);
      for (let i = 0; i < state.tracks.length; i++) {
        const track = state.tracks[i];
        if (track.id != trackId) continue;
        track.setVolume(volume);
        // Vue.set(state.tracks, i, track);
        // state.tracks.splice(i, 1, track);
        Object.assign(state.tracks[i], track);
        console.log("updateVolume splic", track.volume());
      }
    },
    increment(state) {
      state.count++;
    },
    now(state, date) {
      state.now = date;
    },
    updateMessage(state, val) {
      state.message = val;
    }
  },
  actions: {},
  modules: {},
});
