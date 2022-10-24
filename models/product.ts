"use strict";
import { Model } from "sequelize";

export interface ProductAttributes {
  categoryId: number;
  productName: string;
  productSlug: string;
  productDescription: string;
  productImages: string;
  room: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Product extends Model<ProductAttributes> implements ProductAttributes {
    categoryId!: number;
    productName!: string;
    productSlug!: string;
    productDescription!: string;
    productImages!: string;
    room!: string;
    static associate(models: any): void {
      Product.belongsTo(models.category);
      Product.hasMany(models.variant);
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productImages: {
        type: DataTypes.TEXT,
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
  return Product;
};
