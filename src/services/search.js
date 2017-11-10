import { setCache, getCache } from '../lib/cache'; 

export const search = async (payload) => {
  let cacheData = await getCache('search') || { payload: [] };
  cacheData.payload.push(payload);
  setCache('search', cacheData);
}

export const get = async (keyword) => {
  return await getCache(keyword);
}
