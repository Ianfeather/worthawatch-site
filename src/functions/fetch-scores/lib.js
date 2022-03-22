const NBA = require('nba')
// const AWS = require('aws-sdk')
const prepareGameData = require('./prepare-game-data')

// AWS.config.update({
//   accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-1'
// })

// const dynamodb = new AWS.DynamoDB.DocumentClient()

module.exports = {
  getScores: function (event, cb) {
    // return cb(null, {'hello': 'world'})
    NBA.stats.scoreboard({gameDate: '2022-03-21'})
      .then((data) => {
        return cb(null, data)
      })
  }
}

// var getParams = {
//   AttributesToGet: [ 'events' ],
//   TableName: 'worthawatch-import-prod',
//   Key: {
//     'date': event.queryStringParameters.date
//   }
// }

// dynamodb.get(getParams, function (error, data) {
//   if (error) {
//     console.log('ERROR: API error: ' + error)
//     return cb(null, { error: error })
//   }

//   if (!data.Item) {
//     return cb(null, { games: [] })
//   }

//   return cb(null, { games: prepareGameData(data.Item.events) })
// })
//   }
// }
