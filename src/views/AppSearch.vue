<template>
  <NavBar />
  <div class="search">
    <div v-if="err">{{ err }}</div>
    <input type="text" v-model="search">
    <p> Scrum Master Search (case-sensitive btw) - {{ search }}</p>
    <div v-if="matching.length">
      <AppList :apps="matching" />
    </div>
  </div>
</template>

<script>
import getApps from '../composables/getApps'
import AppList from '../components/AppList.vue'
import NavBar from '../components/NavBar.vue'
import { computed, ref } from 'vue'

export default {
  name: 'HomeView',
  components: { AppList, NavBar },
  setup() {
    const search = ref([])
    const { apps, err, fill } = getApps()

    // get all apps from api server
    fill()

    // filter down the list to those where Scrum Master includes search term
    const matching = computed(() => {
         return apps.value.filter((x) => x.scrum.includes(search.value))
    })
    return { apps, err, search, matching }
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
