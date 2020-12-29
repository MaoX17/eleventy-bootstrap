const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const NavigationPlugin = require('@11ty/eleventy-navigation');
const ErrorOverlayPlugin = require('eleventy-plugin-error-overlay');

const filters = require('./utils/filters');
const markdown = require('./utils/markdown');
const shortcodes = require('./utils/shortcodes');
const transforms = require('./utils/transforms');

//const unspla = require('./src/data/unsplash');

const axios = require('axios');
const imgRandom = (link, callback) => {


  let url = "https://api.unsplash.com/search/photos/?client_id=L7p0DjLho9oL3Vgrpa3uIX007UNfg8OfpBHW7lnFWR4&page=1&query="+link;
  //let url = "https://api.unsplash.com/photos/random/?client_id=L7p0DjLho9oL3Vgrpa3uIX007UNfg8OfpBHW7lnFWR4&count=1&query="+link;

    let res = "XXXY";
    let res2 = "XXX_XX2";

  setTimeout(function() {

    res = axios.get(url)
    .then(function (response) {
        console.log(url + "WWWW");
        //console.log(response.data);
        res2 = response.data.results[0].urls.thumb;
        //res2 = response.data[0].urls.thumb;
        callback(null, `${res2}`),
        1000
        //return response.data;
    })
    .catch(function(error) {
        console.log(error);
    });

    console.log(res2 + "YYYY");



//    callback(null, `${res2}`),
    //1000
  });
}


const pluginPWA = require("eleventy-plugin-pwa");


module.exports = (config) => {
  const manifestPath = path.resolve(__dirname, '_site/assets/manifest.json');

  // Allow for customizing the built in markdown parser.
  config.setLibrary('md', markdown);

  // Allow eleventy to understand yaml files
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  // Plugins
  config.addPlugin(NavigationPlugin);
  config.addPlugin(pluginPWA);
  // Shows error name, message, and fancy stacktrace
  config.addPlugin(ErrorOverlayPlugin);

  // Filters
  Object.keys(filters).forEach((key) => {
    config.addFilter(key, filters[key]);
  });

  // Add Nunjucks asynchronous filter
  config.addNunjucksAsyncFilter("imgRandom", imgRandom);



  // Transforms
  Object.keys(transforms).forEach((key) => {
    config.addTransform(key, transforms[key]);
  });

  // Shortcodes
  config.addShortcode('icon', shortcodes.icon);
  config.addPairedShortcode('markdown', shortcodes.markdown);
  config.addNunjucksAsyncShortcode('image', shortcodes.image);
  config.addNunjucksAsyncShortcode('webpack', shortcodes.webpack);

  // Pass-through files
  config.addPassthroughCopy('src/_headers');
  config.addPassthroughCopy('src/favicon.ico');
  // Everything inside static is copied verbatim to `_site`
  config.addPassthroughCopy('src/assets/static');

  // BrowserSync Overrides
  config.setBrowserSyncConfig({
    ...config.browserSyncConfig,
    // Reload when manifest file changes
    files: [manifestPath],
    // Show 404 page on invalid urls
    callbacks: {
      ready: (err, browserSync) => {
        browserSync.addMiddleware('*', (req, res) => {
          const fourOFour = fs.readFileSync('_site/404.html');
          res.write(fourOFour);
          res.end();
        });
      }
    },
    // Speed/clean up build time
    ui: false,
    ghostMode: false
  });

  return {
    dir: { input: 'src', output: '_site', includes: 'includes', data: 'data' },
    // Allow nunjucks, markdown and 11ty files to be processed
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    // Allow pre-processing `.md` files with nunjucks
    // thus transforming the shortcodes
    markdownTemplateEngine: 'njk'
  };



};
