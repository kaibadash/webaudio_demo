<template>
  <div>
    <button v-on:click="nowClick">{{ now }}なう</button>
    <button v-on:click="hee">{{ count }}へぇ</button>
  </div>
</template>

<script>
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
  computed: {
    count() {
      return this.$store.state.count;
    },
    now() {
      return this.$store.state.now;
    }
  }
};
</script>
