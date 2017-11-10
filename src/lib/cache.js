import Redis from 'koa-simple-redis';
const client = new Redis({ url: 'redis://127.0.0.1:6379/2' });


export const setCache = (key, obj) => {
  console.log('in lb', obj);
  client.set(key, obj)
    .then(() => {
      console.info('success');
    });
}

export const getCache = async (key) => {
  return await client.get(key);
}

export const destroy = async (key) => {
  return await client.destroy(key);
}