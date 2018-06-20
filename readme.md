# The front end for worthawatch.today 

This is deployed with netlify. There are no build steps yet.

To deploy to s3 at wasitclose.co.uk:

`aws s3 cp --region eu-west-1 --profile personal static/index.html s3://wasitclose.co.uk/index.html`

## Testing

The following url can be passed to return a date with some nba games:

http://wasitclose.co.uk/?date=20160429
