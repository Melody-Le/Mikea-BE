"use strict";
const productList = require("../dist/data/products");
const products = [
  {
    categoryId: 7,
    productName: "LINNMON / ADILS",
    productSlug: "linnmon-adils",
    productDescription:
      "Pre-drilled holes for legs, for easy assembly. Adjustable feet make the table stand steady also on uneven floors.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/lagkapten-adils-desk-white__1028363_pe835300_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/linnmon-adils-table-white__0734654_pe739562_s5.jpg?f=xl",
    room: "Bed room, Office, Study room",
  },
  {
    categoryId: 7,
    productName: "BEKANT",
    productSlug: "bekant",
    productDescription:
      "This sturdy desk is guaranteed to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cables in place underneath.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/bekant-desk-white__0855220_pe714635_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0736420_pe740535_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0735163_pe739791_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/bekant-desk-white__0854885_pe714612_s5.jpg?f=xl",
    room: "Bed room, office, Study room",
  },
  {
    categoryId: 8,
    productName: "BORGEBY",
    productSlug: "borgeby",
    productDescription:
      "Let your eyes rest on BORGEBY table. The stylish and airy shape creates a visual calm in the room – and the practical storage under the table top makes it easy to keep all your small things organised.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0987517_pe817555_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0986529_pe817181_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0986529_pe817181_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0990328_pe818861_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/borgeby-coffee-table-black__0977133_pe813414_s5.jpg?f=xl",
    room: "Living room",
  },
  {
    categoryId: 8,
    productName: "YPPERLIG",
    productSlug: "ypperlig",
    productDescription:
      "A small, easy-to-use coffee table in solid birch and powder-coated steel – simple and honest materials that also match the stylish and clean shape. Use individually or buy several and place around a room.",
    productImages:
      "https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0836326_pe634510_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0592809_ph147699_s5.jpg?f=xl,https://www.ikea.com/sg/en/images/products/ypperlig-coffee-table-dark-grey-birch__0731747_pe738427_s5.jpg?f=xl",
    room: "Living room",
  },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("products", productList, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("products", null, {});
  },
};
