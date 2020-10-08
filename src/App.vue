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