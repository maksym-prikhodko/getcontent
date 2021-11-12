<template>
    <div class="group">
        <span class="document mb-3">
            <span v-if="document.status === 'draft'"
                    class="absolute pin-t bg-orange px-2 mt-2 rounded-full leading-normal text-white">Draft</span>
            <span class="text-grey group-hover:text-blue flex-grow flex items-center">
                <svg xmlns="http:                <svg xmlns="http:            </span>
            <span class="absolute pin-b bg-blue h-8 w-full p-2 text-white" v-if="document.template">{{document.template}}</span>
        </span>
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
