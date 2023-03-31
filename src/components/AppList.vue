<template>
    <div class="app-list">
        <div v-for="app in apps" :key="app.id">
            <AppSingle :app="app"/> 
        </div> 
    </div>
</template>

<script>
import AppSingle from '../components/AppSingle.vue'

export default {
    props: ['apps'],
    components: { AppSingle },
    setup(props) {

    }
}
</script>

<style>

</style>