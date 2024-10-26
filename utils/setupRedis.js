const { createClient } = require('redis');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

let redisClient = null;

(async () => {
  let REDIS_URL = process.env.REDIS;
  if (process.env.NODE_ENV === 'development') {
    REDIS_URL = process.env.REDIS_LOCAL;
  }
  if (!REDIS_URL) {
    console.error('No Redis URL found in the environment variables');
    // allow to work even without redis
  }

  redisClient = createClient({ url: REDIS_URL }).on('error', e => {
    console.error(`Failed to create the Redis client with error:`);
    console.error(e);
  });

  try {
    await redisClient.connect();
  } catch (e) {
    console.error(`Failed to connect to the Redis server with error:`);
    console.error(e);
  }
})();

module.exports = redisClient;
