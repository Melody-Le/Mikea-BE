"use strict";
import { Model } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";

export interface CategoryAttributes {
  categoryLabel: string;
  categorySlug: string;
  // parentCategoryId?: number | null;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a  part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    categoryLabel!: string;
    categorySlug!: string;
    // parentCategoryId?: number | null;
    static associate(models: any): void {
      // Category.hasMany(models.category, { as: "subCategory" });
      // Category.hasMany(models.product); //FIXME: do I need to put associate here, or can put it inside product file?
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
      // parentCategoryId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      // },
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  // SequelizeSlugify.slugifyModel(Category, {
  //   source: ["categoryLabel"],
  // });
  return Category;
};
