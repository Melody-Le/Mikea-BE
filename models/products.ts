"use strict";
import { Model } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";

export interface ProductAttributes {
  id: number;
  categoryId: Number;
  productName: string;
  productSlug: string;
  productDescription: string;
  productImages: string;
  room: String;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    categoryId!: Number;
    productName!: string;
    productSlug!: string;
    productDescription!: string;
    productImages!: string;
    room!: String;
    static associate(models: any): void {
      // define association here
      Products.belongsTo(models.Categories);
    }
  }
  Products.init(
    {
      productName: DataTypes.STRING,
      productSlug: DataTypes.STRING,
      productDescription: DataTypes.STRING,
      productImages: DataTypes.STRING,
      room: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
