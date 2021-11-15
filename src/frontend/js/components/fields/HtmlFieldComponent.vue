<template>
    <section class="bg-white rounded p-3">
        <quill-editor
          v-model="field.model"
          :options="editorOption"
          class="select-text"
        ></quill-editor>
    </section>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
export default {
  props: {
    field: {
      required: true
    }
  },
  data: () => ({
    editorOption: {
      theme: "bubble",
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }]
        ]
      }
    }
  }),
  components: {
    quillEditor
  }
};
</script>
