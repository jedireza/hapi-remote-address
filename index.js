'use strict';


const register = function (server, options) {

    const getRemoteAddress = function (request) {

        const xFF = request.headers['x-forwarded-for'];

        return xFF ? xFF.split(',')[0].trim() : request.info.remoteAddress;
    };

    server.decorate('request', 'remoteAddress', getRemoteAddress, { apply: true });
};


module.exports = {
    name: 'hapi-remote-address',
    register
};
