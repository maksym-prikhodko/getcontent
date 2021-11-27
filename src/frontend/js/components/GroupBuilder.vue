<template>
  <div class="default-screen" v-if="group">
    <div class="w-2/3 mx-auto">
      <nav class="flex border-b items-center justify-between p-4">
        <input class="text-2xl appearance-none bg-transparent leading-normal outline-none flex-grow"
               placeholder="Give the group a name…"
               v-model="group.name" autofocus>
        <section class="text-sm leading-none">
          <button class="text-grey-dark hover:text-grey-darker no-underline mr-4" @click="close">Close
          </button>
          <button class="bg-green hover:bg-green-dark text-white py-2 px-4 rounded-full no-underline font-bold"
                  @click="save">Save
          </button>
        </section>
      </nav>
      <footer class="p-6 max-w-xl mx-auto text-xs text-grey" v-if="group.id">
        <p class="mb-2">Group UUID: <span class="select-text font-mono">{{group.uuid}}</span></p>
        <p class="mb-2">Created: {{group.created_at}}</p>
        <button class="p-2 -ml-2 rounded text-sm text-grey hover:text-white hover:bg-red"
                @click="remove">Delete this Group
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    uuid: {
      default: null
    },
    groupUuid: {
      default: null
    },
  },
  data: () => ({
    group: null
  }),
  computed: {
    parentGroup() {
      if (this.groupUuid) {
        return this.$store.getters["Groups/byUuid"](this.groupUuid);
      }
      return null;
    }
  },
  created() {
    if (this.uuid) {
      this.group = this.$store.getters["Groups/byUuid"](this.uuid);
    } else {
      this.group = this.$store.getters["Groups/blankGroup"]();
      this.group.parent_id = this.parentGroup ? this.parentGroup.id : null;
    }
  },
  methods: {
    close() {
      if (this.parentGroup) {
        return this.$router.push({
          name: "BrowseGroup",
          params: { uuid: this.parentGroup.uuid }
        });
      }
      return this.$router.push({ name: "BrowseDocuments" });
    },
    save() {
      this.$store.dispatch("Groups/saveGroup", this.group).then(
        () => {
          this.$snack.success({ text: "Saved", button: "Ok" });
        },
        () => {
          this.$snack.danger({ text: "Failed to save group", button: "Ok" });
        }
      );
    },
    remove() {
      this.$store.dispatch("Groups/deleteGroup", this.group).then(
        () => {
          this.$snack.success({ text: "Group deleted", button: "Ok" });
          this.close();
        },
        () => {
          this.$snack.danger({ text: "Failed to delete group", button: "Ok" });
        }
      );
    }
  }
};
</script>
