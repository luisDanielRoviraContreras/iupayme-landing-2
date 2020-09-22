
/* Firebase functions */
const functions = require("firebase-functions");

/* Nuxt */
const { Nuxt } = require('nuxt-start');
const nuxtConfig = require('./nuxt.config.js');
const config = {
  ...nuxtConfig,
  dev: false,
  debug: true,
  buildDir: 'nuxt',
};

const nuxt = new Nuxt(config);
exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  nuxt.render(req, res);
});