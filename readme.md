# The front end for worthawatch.today

This is built and deployed with netlify.

## Deployment process

The build process is configured in npm scripts and the netlify.toml config file.

The master branch has continuous deployment set up for prod (for both the site and the lambda functions). Branch builds are deployed when commits are pushed up to this repo.

## Testing

The following url can be passed to return a date with some nba games:

http://www.worthawatch.today?date=20160429
