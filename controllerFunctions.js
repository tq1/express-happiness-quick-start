var functions = [];

functions['sample-route'] = function (req, res) {
  console.log('controller');
  res.send({result:'the result from the sample route controller function'});
}

exports.functions = functions;