const requestedAt = (req, res, next) => {
  req.time = new Date().toISOString();
  next();
};

module.exports = requestedAt;
