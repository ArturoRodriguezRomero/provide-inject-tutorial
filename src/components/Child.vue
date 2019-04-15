<template>
  <div>
    <GrandChild />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GrandChild from "./GrandChild.vue";

@Component({ name: "Child", components: { GrandChild } })
export default class Child extends Vue {}
</script>
