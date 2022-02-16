'use strict';

/**
 * headers-code router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::headers-code.headers-code');
