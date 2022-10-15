"use strict";
import { Model } from "sequelize";
module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a  part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      // models.Category.belongsToMany(models.Category, {
      //   through: "parentCategoryId",
      // });
    }
  }
  Category.init(
    {
      categoryLabel: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentCategoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
