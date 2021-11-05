<template>
    <div class="p-4 my-2 border-l-4 border-yellow bg-yellow-lightest">
        <p class="uppercase text-xs tracking-wide text-yellow-darker">
            Unknown Field
            <strong>{{field.type}}</strong>
        </p>
        <div v-for="(value, key) in field.model" class="flex">
            <strong>{{key}}</strong>
            <input type="text" v-model="field.model[key]">
        </div>
    </div>
</template>
<script>
export default {
  props: {
    field: {
      required: true
    }
  }
};
</script>
