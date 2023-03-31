<template>
    <NavBar />
    <div v-if="err">{{ err }}</div>
    <div v-if="app && !isDel" class="app">
        <AppSingle :app="app"/>
        <table class="styled-table">
            <tr>
                <td>
                    <router-link :to="{ name: 'update', params: { id: app.id }}"><h3>Update</h3></router-link>
                </td>
                <td>
                    <button @click="ClickDelete(app.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
    <div v-if="isDel" class="app">
        <h3>App Deleted</h3>
        <router-link :to="{ name: 'home' }"><h3>Back</h3></router-link>
    </div>
</template>

<script>
import router from '@/router'
import getApp from '../composables/getApp'
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import AppSingle from '../components/AppSingle.vue'

export default {
    props: [ 'id' ],
    components: { router, NavBar, AppSingle },
    setup(props) {
        const isDel = ref(false)

        const ClickDelete = (id) => {
            //send a delete request to the api server
            fetch('http://localhost:3000/api/apps/' + id, {
                method: 'DELETE'
            })
            .catch((err) => console.log(err))

            isDel.value = true
        }

        // fill app data for the specified app
        const { app, err, fill } = getApp(props.id)

        fill()

        return { app , err, ClickDelete, isDel }         
    }
}
</script>

<style>

</style>