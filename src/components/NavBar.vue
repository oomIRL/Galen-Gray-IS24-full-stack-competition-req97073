<template>
    <div class="site-header">
        <h1>BC Government App Catalog</h1>
        <p>BC Government | Ministry of Citizens' Services Information Management Branch</p>
    </div>
    <div id="nav">
        <router-link :to="{ name: 'home' }">Catalog</router-link> | 
        <router-link :to="{ name: 'new' }">Create App</router-link> |
        <router-link :to="{ name: 'search' }">Search</router-link>
    </div>
    <router-view/>
</template>

<script>
export default {

}
</script>

<style>
    .site-header {
        border-radius: 25px;
        background-color: #009879;
        color: #ffffff;
    }
</style>