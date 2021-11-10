<template>
    <div class="default-screen">
        <p class="text-2xl mb-8 text-grey-darkest">Documents</p>
        <section class="flex">
            <router-link to="/documents/new" class="block mx-2 no-underline">
                <span class="document"><span class="text-2xl text-grey">+</span></span>
            </router-link>
            <router-link v-for="document in documents" :key="document" :to="`/documents/${document.id}`" class="block mx-2 no-underline text-center text-grey-darker text-sm">
                <span class="document mb-2"></span>
                {{document.name}}
            </router-link>
        </section>
    </div>
</template>
<script>
    import {mapGetters} from "vuex"
export default {
    computed: {
        ...mapGetters('Documents', {
            documents: "all"
        })
    }
};
</script>
