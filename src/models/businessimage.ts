import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { business, businessId } from './business';

export interface businessimageAttributes {
  id: string;
  business_id: string;
  url: string;
}

export type businessimagePk = "id";
export type businessimageId = businessimage[businessimagePk];
export type businessimageCreationAttributes = businessimageAttributes;

export class businessimage extends Model<businessimageAttributes, businessimageCreationAttributes> implements businessimageAttributes {
  id!: string;
  business_id!: string;
  url!: string;

  // businessimage belongsTo business via business_id
  business!: business;
  getBusiness!: Sequelize.BelongsToGetAssociationMixin<business>;
  setBusiness!: Sequelize.BelongsToSetAssociationMixin<business, businessId>;
  createBusiness!: Sequelize.BelongsToCreateAssociationMixin<business>;

  static initModel(sequelize: Sequelize.Sequelize): typeof businessimage {
    return businessimage.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    business_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      references: {
        model: 'business',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'businessimage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "business_id",
        using: "BTREE",
        fields: [
          { name: "business_id" },
        ]
      },
    ]
  });
  }
}
