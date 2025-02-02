<template>
    <h1>Hello, world</h1>

    <router-link :to="{name: 'AddPage'}">Add Page</router-link>

    <router-view />
</template>

<script>
import AddPage from "./pages/AddPage.vue";

export default {
    components: {AddPage}

};
</script>

<style>

</style>
