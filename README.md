# hapi-remote-address

Provides `request.remoteAddress` with support for `X-Forwarded-For` headers.

[![Build Status](https://img.shields.io/travis/jedireza/hapi-remote-address.svg)](https://travis-ci.org/jedireza/hapi-remote-address)
[![Dependency Status](https://img.shields.io/david/jedireza/hapi-remote-address.svg)](https://david-dm.org/jedireza/hapi-remote-address)
[![Peer Dependency Status](https://img.shields.io/david/peer/jedireza/hapi-remote-address.svg)](https://david-dm.org/jedireza/hapi-remote-address?type=peer)
[![Dev Dependency Status](https://img.shields.io/david/dev/jedireza/hapi-remote-address.svg)](https://david-dm.org/jedireza/hapi-remote-address?type=dev)


## Install

```bash
$ npm install hapi-remote-address
```

## Usage

Register the plugin:

```js
const Hapi = require('hapi');
const HapiRemoteAddress = require('hapi-remote-address');

const main = async function () {
    const server = Hapi.Server();

    await server.register(HapiRemoteAddress);

    // ...

    await server.start();

    console.log(`Server is listening at ${server.info.uri}`);
};

main();
```

Then in your route handlers you have access to `request.remoteAddress`.


## License

MIT


## Don't forget

What you create with `hapi-remote-address` is more important than `hapi-remote-address`.
