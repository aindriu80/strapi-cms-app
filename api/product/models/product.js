"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
afterFetchAll: async (model, response, options) => {
  console.log("After Fetch...");
  console.log(response);
};

module.exports = {};
