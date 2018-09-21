const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB.DocumentClient()
const prepareGameData = require('./prepare-game-data')

AWS.config.update({region: 'us-east-1'})

module.exports = {
  getScores: function (event, cb) {
    var getParams = {
      AttributesToGet: [ 'games', 'completed' ],
      TableName: 'worthawatch-import-prod',
      Key: {
        'date': event.queryStringParameters.date
      }
    }

    dynamodb.get(getParams, function (error, data) {
      if (error) {
        console.log('ERROR: API error: ' + error)
        return cb(null, { error: error })
      }
      return cb(null, { games: prepareGameData(data) })
    })
  }
}
