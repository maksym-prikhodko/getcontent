<template>
    <div class="default-screen p-0" v-if="document">
        <nav class="flex border-b items-center justify-between p-4">
            <input class="text-2xl appearance-none bg-transparent leading-normal outline-none flex-grow" placeholder="New Document"
                v-model="document.name">
            <section class="text-xs leading-normal font-bold">
                <router-link to="/documents" class="text-grey-dark hover:text-grey-darker no-underline mx-2">Close</router-link>
                <router-link to="/documents" class="bg-green hover:bg-green-dark text-white py-2 px-4 rounded-full no-underline">Save Draft</router-link>
                <router-link to="/documents" class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded-full no-underline">Publish Now</router-link>
            </section>
        </nav>
        <article class="p-6 max-w-xl mx-auto">
            <section v-for="field in document.content.fields">
                <component :is="getFieldComponentName(field.type)" :field="field"></component>
            </section>
            <footer class="mt-6">
                <button class="flex items-center justify-center align-middle leading-none bg-blue text-white p-1 rounded-full w-8 h-8 text-lg font-bold">+</button>
            </footer>
        </article>
    </div>
</template>
<script>
import {upperFirst} from "lodash";
import UnknownFieldComponent from "./fields/UnknownFieldComponent";
import HtmlFieldComponent from "./fields/HtmlFieldComponent";
let fieldComponents = {
  UnknownFieldComponent,
  HtmlFieldComponent
};
export default {
  components: fieldComponents,
  data: () => ({
    document: null
  }),
  mounted() {
    this.document = this.$store.getters["Documents/blankDocument"];
    if (!this.document.content.fields.length) {
      this.document.content.fields.push({ type: "html", text: "" });
      this.document.content.fields.push({ type: "image", model: {url: "https:    }
  },
  watch: {
    document: value => {}
  },
  methods: {
    getFieldComponentName(fieldType) {
      let componentName = `${upperFirst(fieldType)}FieldComponent`;
      console.log(componentName);
      if (!fieldComponents.hasOwnProperty(componentName)) {
        componentName = "UnknownFieldComponent";
      }
      return componentName;
    }
  }
};
</script>
<style scoped>
</style>
