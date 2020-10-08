<template>
  <div>
    <button v-on:click="nowClick">{{ now }}なう</button>
    <button v-on:click="hee">{{ count }}へぇ</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    hee: function() {
      this.$store.commit("increment");
    },
    nowClick: function() {
      this.$store.commit("now", new Date().toString());
    }
  },
  computed: mapState({
    count: state => state.count,
    now: state => state.now
  })
};
</script>
