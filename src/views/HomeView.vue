<template>
  <NavBar />
  <div class="home">
    <div v-if="err">{{ err }}</div>
    <div v-if="apps.length">
      Catalog Size: {{ apps.length }}
      <AppList :apps="apps" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import getApps from '../composables/getApps'
import AppList from '../components/AppList.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'HomeView',
  components: { AppList, NavBar },
  setup() {
    const { apps, err, fill } = getApps()

    // get all the apps from the api server
    fill()

    return { apps, err }
  }
}
</script>
<style>
.styled-table {
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}
</style>
