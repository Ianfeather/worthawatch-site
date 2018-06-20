const lib = require('./lib');

module.exports = function(event, context, callback) {
  lib.getScores(event, function(error, result) {
    if (error) {
      console.error(error);
      callback(new Error('Couldn\'t fetch the scores.'));
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };

    callback(null, response);
  });
};
