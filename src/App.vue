<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <DtmComponent />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DtmComponent from "./components/DtmComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld: HelloWorld,
    DtmComponent: DtmComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
