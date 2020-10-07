import Vue from "vue";
import Vuex from "vuex";
import { Track } from "./Track";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tracks: [],
    count: 0,
    now: "",
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
    increment(state) {
      state.count++;
    },
    now(state, date) {
      state.now = date;
    },
  },
  actions: {},
  modules: {},
});
