'use strict';

/**
 * req-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::req-code.req-code');
