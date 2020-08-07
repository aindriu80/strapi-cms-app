"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    console.log("i123");
    const products = await strapi.services.product.find(ctx.query);

    return products.map((product) => product.title);
  },
};
