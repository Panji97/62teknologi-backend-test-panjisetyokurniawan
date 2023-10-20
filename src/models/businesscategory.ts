import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { business, businessId } from './business';

export interface businesscategoryAttributes {
  id: string;
  business_id?: string;
  alias?: string;
  title?: string;
}

export type businesscategoryPk = "id";
export type businesscategoryId = businesscategory[businesscategoryPk];
export type businesscategoryOptionalAttributes = "business_id" | "alias" | "title";
export type businesscategoryCreationAttributes = Optional<businesscategoryAttributes, businesscategoryOptionalAttributes>;

export class businesscategory extends Model<businesscategoryAttributes, businesscategoryCreationAttributes> implements businesscategoryAttributes {
  id!: string;
  business_id?: string;
  alias?: string;
  title?: string;

  // businesscategory belongsTo business via business_id
  business!: business;
  getBusiness!: Sequelize.BelongsToGetAssociationMixin<business>;
  setBusiness!: Sequelize.BelongsToSetAssociationMixin<business, businessId>;
  createBusiness!: Sequelize.BelongsToCreateAssociationMixin<business>;

  static initModel(sequelize: Sequelize.Sequelize): typeof businesscategory {
    return businesscategory.init({
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
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'businesscategory',
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
