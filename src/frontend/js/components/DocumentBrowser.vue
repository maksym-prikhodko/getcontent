<template>
    <div class="default-screen">
        <p class="text-2xl mb-8 text-grey-darkest">Documents</p>
        <section class="flex">
            <router-link to="/documents/new" class="block mx-2 no-underline text-center text-grey-darker text-xs">
                <document-icon :document="{name: 'New Document'}"></document-icon>
            </router-link>
            <router-link v-for="document in documents" :key="document.uuid" :to="`/documents/${document.uuid}`" class="block mx-2 no-underline text-center text-grey-darker text-xs">
                <document-icon :document="document"></document-icon>
            </router-link>
        </section>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import DocumentIcon from "./DocumentIcon";
export default {
  components: {
    DocumentIcon
  },
  computed: {
    ...mapGetters("Documents", {
      documents: "all"
    })
  },
  created () {
    this.$store.dispatch("Documents/loadDocuments")
  }
};
</script>
