module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

//wrapper function to warp all the async functions and handle try catch
