"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_slugify_1 = __importDefault(require("sequelize-slugify"));
module.exports = (sequelize, DataTypes) => {
  class category extends sequelize_1.Model {
    static associate(models) {
      category.hasMany(models.category, { as: "subcategory" });
      category.hasMany(models.Products);
    }
  }
  category.init(
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
        references: {
          model: "category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "category",
    }
  );
  sequelize_slugify_1.default.slugifyModel(category, {
    source: ["categoryLabel"],
  });
  return category;
};
