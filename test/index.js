'use strict';
const Code = require('code');
const Hapi = require('hapi');
const HapiRemoteAddress = require('..');
const Lab = require('lab');


const lab = exports.lab = Lab.script();


lab.experiment('HapiRemoteAddress', () => {

    let server;

    lab.before(async () => {

        server = Hapi.Server();

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, h) {

                return request.remoteAddress;
            }
        });

        await server.register(HapiRemoteAddress);
    });


    lab.test('it decorates the request with `remoteAddress` (default value)', async () => {

        const response = await server.inject({
            method: 'GET',
            url: '/',
            remoteAddress: '127.0.0.1'
        });

        Code.expect(response.request.remoteAddress).to.equal('127.0.0.1');
    });


    lab.test('it decorates the request with `remoteAddress` (x-forwarded-for)', async () => {

        const response = await server.inject({
            method: 'GET',
            url: '/',
            remoteAddress: '127.0.0.1',
            headers: {
                'x-forwarded-for': '192.168.0.1'
            }
        });

        Code.expect(response.request.remoteAddress).to.equal('192.168.0.1');
    });
});
