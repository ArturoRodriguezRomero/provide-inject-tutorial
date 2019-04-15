<template>
  <div id="app">
    <ServiceProvider>
      <Child />
    </ServiceProvider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServiceProvider from "./providers/ServiceProvider.vue";
import Child from "./components/Child.vue";

@Component({ name: "App", components: { ServiceProvider, Child } })
export default class App extends Vue {}
</script>
