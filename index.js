'use strict';


const register = function (server, options) {

    const getRemoteAddress = function (request) {

        return request.headers['x-forwarded-for'] || request.info.remoteAddress;
    };

    server.decorate('request', 'remoteAddress', getRemoteAddress, { apply: true });
};


module.exports = {
    name: 'hapi-remote-address',
    register
};
