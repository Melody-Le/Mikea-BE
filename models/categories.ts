"use strict";
import { Model } from "sequelize";
import SequelizeSlugify from "sequelize-slugify";

export interface CategoryAttributes {
  id: number;
  categoryLabel: string;
  categorySlug: string;
  parentCategoryId?: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Categories
    extends Model<CategoryAttributes>
    implements CategoryAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a  part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number; // ! mean: non-nullable
    categoryLabel!: string;
    categorySlug!: string;
    parentCategoryId?: number;
    static associate(models: any): void {
      // define association here
      // models.Category.belongsToMany(models.Category, {
      //   through: "Category",
      // });
      Categories.hasMany(models.Categories, { as: "subCategories" });
      Categories.hasMany(models.Products);
    }
  }
  Categories.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Categories",
    }
  );
  SequelizeSlugify.slugifyModel(Categories, {
    source: ["categoryLabel"],
  });
  return Categories;
};
