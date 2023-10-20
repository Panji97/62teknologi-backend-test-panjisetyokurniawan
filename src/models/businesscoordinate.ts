import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { business, businessId } from './business';

export interface businesscoordinateAttributes {
  id: string;
  business_id?: string;
  latitude?: number;
  longitude?: number;
}

export type businesscoordinatePk = "id";
export type businesscoordinateId = businesscoordinate[businesscoordinatePk];
export type businesscoordinateOptionalAttributes = "business_id" | "latitude" | "longitude";
export type businesscoordinateCreationAttributes = Optional<businesscoordinateAttributes, businesscoordinateOptionalAttributes>;

export class businesscoordinate extends Model<businesscoordinateAttributes, businesscoordinateCreationAttributes> implements businesscoordinateAttributes {
  id!: string;
  business_id?: string;
  latitude?: number;
  longitude?: number;

  // businesscoordinate belongsTo business via business_id
  business!: business;
  getBusiness!: Sequelize.BelongsToGetAssociationMixin<business>;
  setBusiness!: Sequelize.BelongsToSetAssociationMixin<business, businessId>;
  createBusiness!: Sequelize.BelongsToCreateAssociationMixin<business>;

  static initModel(sequelize: Sequelize.Sequelize): typeof businesscoordinate {
    return businesscoordinate.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    business_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      references: {
        model: 'business',
        key: 'id'
      }
    },
    latitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'businesscoordinate',
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
