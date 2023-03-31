const appRoutes = (app, fs) => {
    const dataPath = './data/Apps.json';

    // GET
    app.get('/api/apps', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
           
            // read in the json file and send all the apps
            res.status(200).send(JSON.parse(data));
        });
    });

    // GET One
    app.get('/api/apps/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const jsonData = JSON.parse(data);
            const AppRow = jsonData.filter(n => n.id == req.params['id'])

            // read in the json file, filter and send the requested app
            res.status(200).send(AppRow[0]);
        });
    });

    // POST
    app.post('/api/apps', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const newAppId = Date.now().toString();
            const jsonData = JSON.parse(data);
            req.body['id'] = newAppId;
            jsonData.push(req.body);

            //read in the json file, create an id from timestamp
            // write the post data back out
            fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    throw err;
                }

                res.status(200).send('new app added');
            });
        });
    });

    // PUT
    app.put('/api/apps/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const appId = req.params['id'];
            const jsonData = JSON.parse(data).filter(n => n.id != req.params['id']);
            req.body['id'] = appId;
            jsonData.push(req.body);

            // read in the json file, filter out the old row data
            // write the put data back out with new data on the same id
            fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    throw err;
                }

                res.status(200).send('app id:' + appId + ' updated');
            });
        });
    });

    // DELETE
    app.delete('/api/apps/:id', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            const appId = req.params['id'];
            const jsonData = JSON.parse(data).filter(n => n.id != req.params['id']);

            // read in the json file, filter out the deleted row data, write the results
            fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
                if (err) {
                    throw err;
                }

                res.status(200).send('app id:' + appId + ' deleted');
            });
        });
    });
};

module.exports = appRoutes;