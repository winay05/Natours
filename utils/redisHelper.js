const hash = require('object-hash');
const redisClient = require('./setupRedis');

exports.isRedisWorking = () => {
  // verify wheter there is an active connection
  // to a Redis server or not
  return !!(redisClient || {}).isOpen;
};

exports.reqToKey = req => {
  const reqDataToHash = {
    query: req.query,
    params: req.params,
    body: req.body
  };

  return `${req.originalUrl}@${hash.sha1(reqDataToHash)}`;
};
