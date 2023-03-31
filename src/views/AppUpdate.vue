<template>
        <NavBar />
        <div v-if="err">{{ err }}</div>
        <div v-if="app && !isSub && !err" class="update-app">
            <form @submit.stop.prevent="onSubmit" :action="link" method="PUT">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>App Name</th>
                            <th><input type="text" id="name" name="name" ref="name" :value="app.name" required></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Product Owner</td>
                            <td><input type="text" id="owner" name="owner" ref="owner" :value="app.owner" required></td>
                        </tr>
                        <tr class="active-row">
                            <td>Scrum Master</td>
                            <td><input type="text" id="scrum" name="scrum" ref="scrum" :value="app.scrum" required></td>
                        </tr>
                        <tr>
                            <td>Start Date</td>
                            <td><input type="date" id="date" name="date" ref="date" :value="app.date" required></td>
                        </tr>
                        <tr class="active-row">
                            <td>Methodology</td>
                            <td><input type="text" id="methodology" name="methodology" ref="methodology" :value="app.methodology" required></td>
                        </tr>
                        <tr>
                            <td>Developers</td>
                            <td>
                                <ul>
                                    <li><input type="text" id="developer1" name="developer1" ref="developer1" :value="app.developers[0]" required></li>
                                    <li><input type="text" id="developer2" name="developer2" ref="developer2" :value="app.developers[1]"></li>
                                    <li><input type="text" id="developer3" name="developer3" ref="developer3" :value="app.developers[2]"></li>
                                    <li><input type="text" id="developer4" name="developer4" ref="developer4" :value="app.developers[3]"></li>
                                    <li><input type="text" id="developer5" name="developer5" ref="developer5" :value="app.developers[4]"></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Update</button>
            </form>
        </div>
        <div v-if="isSub" class="app">
            <h3>App Updated</h3>
            <div v-if="fetchErr">{{ fetchErr }}</div>
            <router-link :to="{ name: 'home' }"><h3>Back</h3></router-link>
        </div>
</template>

<script>
import getApp from '../composables/getApp'
import NavBar from '../components/NavBar.vue'

export default {
    props: [ 'id' ],
    components: { NavBar },
    data() {
        return {
            isSub: false,
            fetchErr: null
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

                try {
                    // send put request to the api server
                    const res = await fetch('http://localhost:3000/api/apps/' + this.id, {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            "x-access-token": "token-value"
                        },
                        body: JSON.stringify(pData)
                    })
                    if (!res.ok)
                    { 
                        throw Error('Updating App data failed')
                    }
                }
                catch (e) {
                    this.fetchErr = e.message
                    console.log(e.message)
                }
                this.isSub = true
            }
    },
    setup(props) {
        const { app, err, fill } = getApp(props.id)

        fill()

        const link = 'http://localhost:3000/api/apps/' + props.id
        
        return { app , err, link } 
    }
}
</script>

<style>

</style>