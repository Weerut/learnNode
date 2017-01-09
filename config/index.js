var configValues = require('./config.json');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://'
            + configValues.uname
            + ':'
            + configValues.pwd
            + '@ds157268.mlab.com:57268/nodetodosample';
    }
};