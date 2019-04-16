<template>
  <div id="app">
    <ServiceProvider>
      <PersonProvider>
        <Child />
        <PersonInfo />
      </PersonProvider>
    </ServiceProvider>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ServiceProvider from "./providers/ServiceProvider.vue";
import PersonProvider from "./providers/PersonProvider.vue";
import Child from "./components/Child.vue";
import PersonInfo from "./components/PersonInfo.vue";

@Component({
  name: "App",
  components: { ServiceProvider, Child, PersonProvider, PersonInfo }
})
export default class App extends Vue {}
</script>
