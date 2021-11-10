<template>
    <div class="p-4 my-2 border-l-4 border-yellow bg-yellow-lightest">
        <p class="uppercase text-xs tracking-wide text-yellow-darker">
            Unknown Field
            <strong>{{field.type}}</strong>
        </p>
        <label v-for="(value, key) in field.model" class="flex items-center p-2">
            <strong class="w-1/5 text-right mr-4">{{key}}</strong>
            <input type="text" v-model="field.model[key]" class="flex-grow p-2 bg-yellow-lighter">
        </label>
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
