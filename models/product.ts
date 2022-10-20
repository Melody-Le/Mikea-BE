"use strict";
import { Model } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";

export interface ProductAttributes {
  categoryId: number;
  productName: string;
  productSlug: string;
  productDescription: string;
  productImages: string;
  room: String;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    categoryId!: number;
    productName!: string;
    productSlug!: string;
    productDescription!: string;
    productImages!: string;
    room!: String;
    static associate(models: any): void {
      // define association here
      Product.belongsTo(models.category);
    }
  }
  Product.init(
    {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      productSlug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      productDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productImages: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      room: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  // SequelizeSlugify.slugifyModel(Product, {
  //   source: ["productName"],
  // });
  return Product;
};
