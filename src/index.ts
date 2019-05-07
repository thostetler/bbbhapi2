import * as hapi from '@hapi/hapi';

const server: hapi.Server = new hapi.Server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return 'ldskjf';
  }
});

async function start () {
  try {
    await server.start();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log('Server is running at: ', server.info.uri);
}

start();
