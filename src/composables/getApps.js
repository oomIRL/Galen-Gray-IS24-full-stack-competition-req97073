import { ref } from 'vue'

 const getApps = () => {
    const apps = ref([])
    const err = ref(null)

    // Query the api server for all Apps
    // return app data, and any error message
    const fill = async() => {
      try {
        let appData = await fetch('http://localhost:3000/api/apps')
        if (!appData.ok)
        { 
          throw Error('App data fill failed')
        }
        apps.value = await appData.json()
      }
      catch (e) {
        err.value = e.message
        console.log(e.message)
      }
    }

    return { apps, err, fill }
 }

 export default getApps