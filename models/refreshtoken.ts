"use strict";
import { Model } from "sequelize";
export interface RefreshTokenAttributes {
  token: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class refreshToken
    extends Model<RefreshTokenAttributes>
    implements RefreshTokenAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    token!: string;
    static associate(models: any) {
      // define association here
    }
  }
  refreshToken.init(
    {
      token: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      sequelize,
      modelName: "refreshToken",
    }
  );
  return refreshToken;
};
