<template>
        <NavBar />
        <div v-show="!isSub" class="create-app">
            <form @submit.stop.prevent="onSubmit" action="http://localhost:3000/api/apps" method="POST">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>App Name</th>
                            <th><input type="text" id="name" name="name" ref="name" required></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product Owner</td>
                            <td><input type="text" id="owner" name="owner" ref="owner" required></td>
                        </tr>
                        <tr class="active-row">
                            <td>Scrum Master</td>
                            <td><input type="text" id="scrum" name="scrum" ref="scrum" required></td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td><input type="date" id="date" name="date" ref="date" required></td>
                        </tr>
                        <tr class="active-row">
                            <td>Methodology</td>
                            <td><input type="text" id="methodology" name="methodology" ref="methodology" required></td>
                        </tr>
                        <tr>
                            <td>Developers</td>
                            <td>
                                <ul>
                                    <li><input type="text" id="developer1" name="developer1" ref="developer1" required></li>
                                    <li><input type="text" id="developer2" name="developer2" ref="developer2"></li>
                                    <li><input type="text" id="developer3" name="developer3" ref="developer3"></li>
                                    <li><input type="text" id="developer4" name="developer4" ref="developer4"></li>
                                    <li><input type="text" id="developer5" name="developer5" ref="developer5"></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <button type="submit">Create</button>
            </form>
        </div>
        <div v-if="isSub" class="app">
            <h3>App Created</h3>
            <div v-if="err">{{ err }}</div>
            <router-link :to="{ name: 'home' }"><h3>Back</h3></router-link>
        </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'

export default {
    components: { NavBar },
    data() {
        return {
            isSub: false,
            err: null
        }
    },
    methods: {
            async onSubmit() {
                // capture the form data
                const pData = {
                    name: this.$refs.name.value,
                    owner: this.$refs.owner.value,
                    developers: [
                        this.$refs.developer1.value,
                        this.$refs.developer2.value,
                        this.$refs.developer3.value,
                        this.$refs.developer4.value,
                        this.$refs.developer5.value                                                          
                    ],
                    scrum: this.$refs.scrum.value,
                    date: this.$refs.date.value,
                    methodology: this.$refs.methodology.value
                }

                // send post request to the api server
                try {
                    const res = await fetch('http://localhost:3000/api/apps', {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                            "x-access-token": "token-value"
                        },
                        body: JSON.stringify(pData)
                    })
                    if (!res.ok)
                    { 
                        throw Error('Posting new App data failed')
                    }
                }
                catch (e) {
                    this.err = e.message
                    console.log(e.message)
                }
                this.isSub = true
        }
    },
    setup(props) {

    }
}
</script>

<style>

</style>