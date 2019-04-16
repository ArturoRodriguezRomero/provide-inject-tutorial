<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { LanguageService } from "../services/language/LanguageService";
import { NavigatorLanguageService } from "../services/language/NavigatorLanguageService";
import { DateService } from "../services/date/DateService";
import { BrowserDateService } from "../services/date/BrowserDateService";
import { Person } from "../models/Person";

@Component({ name: "ServiceProvider" })
export default class ServiceProvider extends Vue {
  @Provide()
  languageService: LanguageService = new NavigatorLanguageService();

  @Provide()
  dateService: DateService = new BrowserDateService();
}
</script>
