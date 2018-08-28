# The front end for worthawatch.today

This is built and deployed with netlify.

## Deployment process

The build process is configured in npm scripts and the netlify.toml config file.

The master branch has continuous deployment set up for prod (for both the site and the lambda functions). Branch builds are deployed when commits are pushed up to this repo.

## Testing

The following url can be passed to return a date with some nba games:

http://www.worthawatch.today?date=20160429

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run preact-dev

# build for production with minification
npm run preact-build

# test the production build locally
npm run preact-serve

# run tests with jest and preact-render-spy
npm run preact-test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
