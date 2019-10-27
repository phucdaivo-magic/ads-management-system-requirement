var bodyParser = require('body-parser')
const path = require('path')

module.exports = function (app, express) {
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.use(express.static(path.join(__dirname, '../dist')));
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../dist', 'index.html'));
      });

    return app
}