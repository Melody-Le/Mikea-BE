"use strict";
import { Model, UUIDV4 } from "sequelize";

export interface VariantAttributes {
  id: string;
  productId: number;
  qtyInStock: number;
  variantDescription: string;
  price: number;
  color?: string | null;
  size?: string | null;
  material?: string | null;
  variantImage: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Variant extends Model<VariantAttributes> implements VariantAttributes {
    id!: string;
    productId!: number;
    qtyInStock!: number;
    variantDescription!: string;
    price!: number;
    color?: string | null;
    size?: string | null;
    material?: string | null;
    variantImage!: string;
    static associate(models: any) {
      Variant.belongsTo(models.product);
      Variant.hasOne(models.lineItem);
    }
  }
  Variant.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qtyInStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      variantDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
      },
      size: {
        type: DataTypes.STRING,
      },
      material: {
        type: DataTypes.STRING,
      },
      variantImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "variant",
    }
  );
  return Variant;
};
