module.exports = function(jwt) {

  var throwUnauthorizedError = function (next) {
    var err = new Error();
    err.type = 'unauthorizedError';
    return next(err);
  };

  return function (req, res, next) {
    console.log('middleware');
    if (req.headers.authorization) {
      var token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, 'very secret', function (err, decoded) {
        console.log(JSON.stringify(decoded));
        console.log(err);

        if (err) {
          throwUnauthorizedError(next);
        } else {
          console.log('authorized');
          next();
        };
      });
    } else {
      throwUnauthorizedError(next);
    };
  }
}