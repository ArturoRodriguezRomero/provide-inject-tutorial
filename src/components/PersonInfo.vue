<template>
  <section>
    <div>
      Your name is
      <span>{{ person.name }}</span>
      and your age is
      <span>{{ person.age }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { Person } from "../models/Person";

@Component({ name: "PersonInfo" })
export default class GrandChild extends Vue {
  @Inject()
  person!: Person;
}
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}

span {
  font-weight: bold;
}
</style>
