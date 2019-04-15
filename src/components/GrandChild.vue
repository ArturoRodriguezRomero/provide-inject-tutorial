<template>
  <section>
    <div>
      Your language is
      <span>{{ languageService.getLanguage() }}</span>
    </div>
    <div>
      Today is
      <span>{{ dateService.getDate() }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Inject } from "vue-property-decorator";
import { LanguageService } from "../services/language/LanguageService";
import { DateService } from "../services/date/DateService";

@Component({ name: "GrandChild" })
export default class GrandChild extends Vue {
  @Inject()
  languageService!: LanguageService;

  @Inject()
  dateService!: DateService;
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
