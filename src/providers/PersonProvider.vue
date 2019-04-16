<template>
  <div>
    <label for>
      Person Name
      <input type="text" v-model="person.name" />
    </label>
    <label for>
      Person Age
      <input type="number" v-model="person.age" />
    </label>
    <hr />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { Person } from "../models/Person";

@Component({ name: "PersonProvider" })
export default class PersonProvider extends Vue {
  @Provide()
  person: Person = new Person("Thor", 18);
}
</script>
