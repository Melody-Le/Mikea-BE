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
  class Products extends Model<ProductAttributes> implements ProductAttributes {
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
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Categories",
          key: "id",
        },
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
      modelName: "Products",
    }
  );
  SequelizeSlugify.slugifyModel(Products, {
    source: ["productName"],
  });
  return Products;
};
