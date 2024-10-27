const { isRedisWorking } = require('../utils/redisHelper');
const redisClient = require('../utils/setupRedis');

exports.writeCache = async (key, data) => {
  if (isRedisWorking()) {
    try {
      // write data to the Redis cache
      console.log('Writing cache for key=', key);
      await redisClient.set(key, data);
    } catch (e) {
      console.error(`Failed to cache data for key=${key}`, e);
    }
  }
};

exports.readCache = async key => {
  if (isRedisWorking()) {
    try {
      // read data from the Redis cache
      const data = await redisClient.get(key);
      return JSON.parse(data);
    } catch (e) {
      console.error(`Failed to read data from the cache for key=${key}`, e);
    }
  }
};
