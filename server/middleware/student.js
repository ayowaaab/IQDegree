module.exports = function auth(req, res, next) {
    if (!req.user.role.indexOf("student") !== -1) next();
    return res.status(200).send(" this is an student !");
  };
  