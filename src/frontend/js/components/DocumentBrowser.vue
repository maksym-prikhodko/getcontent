<template>
  <div class="default-screen">
    <nav class="px-4 py-3 border-b border-grey-light text-sm">
      <router-link :to="{name: 'BrowseDocuments' }" class="breadcrumb-link">Home</router-link>
      <span v-if="group">&rsaquo;</span>
      <router-link :to="{name: 'BrowseGroup', params: {uuid: uuid} }" class="breadcrumb-link" v-if="group">
        {{group.name}}
      </router-link>
    </nav>
    <div class="p-8">
      <p class="mb-8 text-lg text-grey-darker">Documents</p>
      <section class="flex">
        <router-link :to="{name: 'NewDocument', params: {groupUuid: uuid}}"
                     class="block mx-2 no-underline text-center text-grey-darker text-xs">
          <document-icon :document="{name: 'New Document'}"></document-icon>
        </router-link>
        <router-link v-if="documents" v-for="document in documents" :key="document.uuid"
                     :to="{name: 'EditDocument', params: {uuid: document.uuid}}"
                     class="block mx-2 no-underline text-center text-grey-darker text-xs">
          <document-icon :document="document"></document-icon>
        </router-link>
      </section>
      <p class="my-8 text-lg text-grey-darker">Groups</p>
      <section class="flex">
        <router-link :to="{name: 'NewGroup', params: {groupUuid: uuid}}"
                     class="block mx-2 no-underline text-center text-grey-darker text-xs">
          <group-icon :group="{name: 'New Group'}"></group-icon>
        </router-link>
        <router-link v-if="groups" v-for="group in groups" :key="group.uuid"
                     :to="{name: 'BrowseGroup', params: {uuid: group.uuid} }"
                     class="block mx-2 no-underline text-center text-grey-darker text-xs">
          <group-icon :group="group"></group-icon>
        </router-link>
      </section>
    </div>
  </div>
</template>
<script>
import DocumentIcon from "./DocumentIcon";
import GroupIcon from "./GroupIcon";
export default {
  components: {
    DocumentIcon,
    GroupIcon
  },
  props: {
    uuid: {
      default: null
    }
  },
  computed: {
    documents() {
      if (this.uuid) {
        return this.$store.getters["Documents/inGroup"](this.uuid);
      }
      return this.$store.getters["Documents/inRoot"];
    },
    groups() {
      if (this.uuid) {
        return this.$store.getters["Groups/inGroup"](this.uuid);
      }
      return this.$store.getters["Groups/inRoot"];
    },
    group() {
      if (this.uuid) {
        return this.$store.getters["Groups/byUuid"](this.uuid);
      }
      return null;
    }
  },
  created() {
    this.$store.dispatch("Documents/loadDocuments");
    this.$store.dispatch("Groups/loadGroups");
  }
};
</script>
