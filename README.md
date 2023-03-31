# vue-app-catalog
Galen-Gray-IS24-full-stack-competition-req97073

Thanks for taking a look at my assignment!

The project has three components:

Under data/Apps.json there is the json file that's functioning as the "DB".
This is expected to be an array of various apps following the sample schema

The back-end component
server.js
routes/api.js
routes/apps.js

This component primarily uses express.
Once "npm install" has been run, the component can be run with "npm start", this will start the service
the component is reachable at http://localhost:3000/api and supports GET, POST, PUT, DELETE requests

The front-end component
components/AppList.vue
components/AppSingle.vue
components/NavBar.vue
composables/getApp.js
composables/getApps.js
router/index.js
views/AppCreate.vue
views/AppDetails.vue
views/AppSearch.vue
views/AppUpdate.vue
views/HomeView.vue
App.vue
main.js

This is a Vue component. The component can be run with "npm run serve", and will be reachable at http://localhost:8080

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
