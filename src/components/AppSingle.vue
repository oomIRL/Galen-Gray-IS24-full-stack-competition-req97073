<template>
    <div class="app">
        <table class="styled-table">
            <thead>
                <tr>
                    <router-link :to="{ name: 'details', params: { id: app.id }}">
                        <th>{{ trimName }}</th>
                    </router-link>
                    <th>ID: {{ app.id }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Product Owner</td>
                    <td>{{ app.owner }}</td>
                </tr>
                <tr class="active-row">
                    <td>Scrum Master</td>
                    <td>{{ app.scrum }}</td>
                </tr>
                <tr>
                    <td>Start Date</td>
                    <td>{{ app.date }}</td>
                </tr>
                <tr class="active-row">
                    <td>Methodology</td>
                    <td>{{ app.methodology }}</td>
                </tr>
                <tr>
                    <td>Developers</td>
                    <td>
                        <ul>
                            <div v-for="d in app.developers" :key="d">
                                <li v-if="d">{{ d }}</li>
                            </div>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['app'],
    setup(props) {
        const trimName = computed(() => {
            // Trim down long app names in list view
            if (props.app.name.length < 100)
                return props.app.name
            else
                return  props.app.name.substring(0, 100) + " ..."
        })

        return { trimName }
    }
}
</script>

<style>

</style>