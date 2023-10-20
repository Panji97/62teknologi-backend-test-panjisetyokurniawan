import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { business, businessId } from './business';

export interface businesslocationAttributes {
  id: string;
  business_id?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  country?: string;
  display_address?: string;
  state?: string;
  zip_code?: string;
  cross_streets?: string;
}

export type businesslocationPk = "id";
export type businesslocationId = businesslocation[businesslocationPk];
export type businesslocationOptionalAttributes = "business_id" | "address1" | "address2" | "address3" | "city" | "country" | "display_address" | "state" | "zip_code" | "cross_streets";
export type businesslocationCreationAttributes = Optional<businesslocationAttributes, businesslocationOptionalAttributes>;

export class businesslocation extends Model<businesslocationAttributes, businesslocationCreationAttributes> implements businesslocationAttributes {
  id!: string;
  business_id?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  city?: string;
  country?: string;
  display_address?: string;
  state?: string;
  zip_code?: string;
  cross_streets?: string;

  // businesslocation belongsTo business via business_id
  business!: business;
  getBusiness!: Sequelize.BelongsToGetAssociationMixin<business>;
  setBusiness!: Sequelize.BelongsToSetAssociationMixin<business, businessId>;
  createBusiness!: Sequelize.BelongsToCreateAssociationMixin<business>;

  static initModel(sequelize: Sequelize.Sequelize): typeof businesslocation {
    return businesslocation.init({
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
    address1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    display_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    zip_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cross_streets: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'businesslocation',
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
