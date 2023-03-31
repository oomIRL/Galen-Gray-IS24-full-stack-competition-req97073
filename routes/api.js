const appRoutes = require('./apps');

const appRouter = (app,fs) => {
    app.get('/api', (req, res) => {
        res.status(200).send('+++ api-server +++');
    });

    appRoutes(app, fs);
}

module.exports = appRouter;