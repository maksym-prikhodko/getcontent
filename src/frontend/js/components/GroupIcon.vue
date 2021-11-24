<template>
  <div class="group">
    <div class="relative aspect-ratio-4/3 bg-white border-t-2 border-blue bg-blue-light rounded-b w-24 mb-3 shadow" v-if="group.uuid">
      <div class="absolute pin-t -mt-2 h-2 w-10 rounded-t bg-blue"></div>
    </div>
    <div class="relative aspect-ratio-4/3 bg-white border-t-2 rounded-b w-24 mb-3 shadow" v-else>
      <div class="absolute pin-t -mt-2 h-2 w-10 rounded-t bg-grey-light"></div>
      <span
        class="absolute pin w-full h-full text-4xl flex items-center justify-center text-grey group-hover:text-blue">+</span>
    </div>
    <span class="group-hover:text-blue">{{group.name}}</span>
  </div>
</template>
<script>
export default {
  name: "GroupIcon",
  props: {
    group: {
      required: true
    }
  }
};
</script>
