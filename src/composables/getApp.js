import { ref } from 'vue'

 const getApp = (id) => {
    const app = ref(null)
    const err = ref(null)

    // Query the api server for an App by id
    // return app data, and any error message
    const fill = async() => {
      try {
        let appData = await fetch('http://localhost:3000/api/apps/' + id)
        if (!appData.ok)
        { 
          throw Error('App data fill failed for the id')
        }
        app.value = await appData.json()
      }
      catch (e) {
        err.value = e.message
        console.log(e.message)
      }
    }

    return { app, err, fill }
 }

 export default getApp