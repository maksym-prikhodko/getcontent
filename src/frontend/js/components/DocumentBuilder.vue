<template>
    <div class="default-screen p-0" v-if="document">
        <nav class="flex border-b items-center justify-between p-4">
            <input class="text-2xl appearance-none bg-transparent leading-normal outline-none flex-grow"
                   placeholder="New Document"
                   v-model="document.name">
            <section class="text-xs leading-normal font-bold">
                <button class="text-grey-dark hover:text-grey-darker no-underline mx-2"
                        @click="close">Close
                </button>
                <button class="bg-green hover:bg-green-dark text-white py-2 px-4 rounded-full no-underline"
                        @click="save">Save
                </button>
                <button class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded-full no-underline">Publish Now
                </button>
            </section>
        </nav>
        <article class="p-6 max-w-xl mx-auto">
            <section v-for="field in document.content.fields">
                <component :is="getFieldComponentName(field.type)" :field="field"></component>
            </section>
            <footer class="mt-6">
                <button class="text-blue">
                    <svg xmlns="http:                        <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm5 13h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 1 1 0 2z"/>
                    </svg>
                </button>
            </footer>
        </article>
    </div>
</template>
<script>
import { upperFirst, isSet } from "lodash";
import UnknownFieldComponent from "./fields/UnknownFieldComponent";
import HtmlFieldComponent from "./fields/HtmlFieldComponent";
let fieldComponents = {
  UnknownFieldComponent,
  HtmlFieldComponent
};
export default {
  components: fieldComponents,
  props: {
    uuid: {
      default: null
    }
  },
  data: () => ({
    document: null
  }),
  created() {
    if (this.uuid) {
      this.document = this.$store.getters["Documents/byUuid"](this.uuid);
    } else {
      this.document = this.$store.getters["Documents/blankDocument"]();
    }
    if (this.document.content === undefined) {
      this.document.content = { fields: [] };
    }
  },
  watch: {
    document: value => {}
  },
  methods: {
    getFieldComponentName(fieldType) {
      let componentName = `${upperFirst(fieldType)}FieldComponent`;
      if (!fieldComponents.hasOwnProperty(componentName)) {
        componentName = "UnknownFieldComponent";
      }
      return componentName;
    },
    close() {
      this.$router.push("/documents");
    },
    save() {
      this.$store.dispatch("Documents/saveDocument", this.document);
    }
  }
};
</script>
