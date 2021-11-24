<template>
  <div class="group">
    <div class="relative aspect-ratio-3/4 rounded bg-white w-24 mb-3 shadow leading-normal border-b border-grey" v-if="document.uuid">
      <span v-if="document.status === 'draft'" class="absolute pin-t bg-orange px-2 py-1 mt-2 rounded-full text-white leading-none">Draft</span>
      <div class="absolute pin flex flex-col items-center justify-center p-6">
        <div class="bg-grey h-px w-full mb-2"></div>
        <div class="bg-grey h-px w-full mb-2"></div>
        <div class="bg-grey h-px w-full"></div>
      </div>
      <span class="absolute pin-b pin-l bg-blue w-full p-1 text-white" v-if="document.template">{{document.template}}</span>
    </div>
    <div class="relative aspect-ratio-3/4 rounded bg-white w-24 mb-3 shadow leading-normal" v-else>
      <span
        class="absolute pin w-full h-full text-4xl flex items-center justify-center text-grey group-hover:text-blue">+</span>
    </div>
    <span class="group-hover:text-blue">{{document.name}}</span>
  </div>
</template>
<script>
  export default {
    name: "DocumentIcon",
    props: {
      document: {
        required: true
      }
    }
  };
</script>
