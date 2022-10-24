"use strict";
import { Model } from "sequelize";

export interface CategoryAttributes {
  categoryLabel: string;
  categorySlug: string;
  parentCategoryId?: number | null;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Category
    extends Model<CategoryAttributes>
    implements CategoryAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a  part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    categoryLabel!: string;
    categorySlug!: string;
    parentCategoryId?: number | null;
    static associate(models: any): void {
      models.category.hasMany(models.category, {
        as: "subCategory",
        foreignKey: "parentCategoryId",
      });
      Category.hasMany(models.product);
    }
  }
  Category.init(
    {
      categoryLabel: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      categorySlug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      parentCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  return Category;
};
