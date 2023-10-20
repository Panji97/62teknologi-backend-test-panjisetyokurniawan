import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { businesscategory, businesscategoryId } from './businesscategory';
import type { businesscoordinate, businesscoordinateId } from './businesscoordinate';
import type { businessimage, businessimageId } from './businessimage';
import type { businesslocation, businesslocationId } from './businesslocation';

export interface businessAttributes {
  id: string;
  alias?: string;
  name?: string;
  image_url?: string;
  is_closed?: number;
  url?: string;
  review_count?: number;
  rating?: number;
  transactions?: string;
  price?: string;
  phone?: string;
  disploy_phone?: string;
  distance?: string;
}

export type businessPk = "id";
export type businessId = business[businessPk];
export type businessOptionalAttributes = "alias" | "name" | "image_url" | "is_closed" | "url" | "review_count" | "rating" | "transactions" | "price" | "phone" | "disploy_phone" | "distance";
export type businessCreationAttributes = Optional<businessAttributes, businessOptionalAttributes>;

export class business extends Model<businessAttributes, businessCreationAttributes> implements businessAttributes {
  id!: string;
  alias?: string;
  name?: string;
  image_url?: string;
  is_closed?: number;
  url?: string;
  review_count?: number;
  rating?: number;
  transactions?: string;
  price?: string;
  phone?: string;
  disploy_phone?: string;
  distance?: string;

  // business hasMany businesscategory via business_id
  businesscategories!: businesscategory[];
  getBusinesscategories!: Sequelize.HasManyGetAssociationsMixin<businesscategory>;
  setBusinesscategories!: Sequelize.HasManySetAssociationsMixin<businesscategory, businesscategoryId>;
  addBusinesscategory!: Sequelize.HasManyAddAssociationMixin<businesscategory, businesscategoryId>;
  addBusinesscategories!: Sequelize.HasManyAddAssociationsMixin<businesscategory, businesscategoryId>;
  createBusinesscategory!: Sequelize.HasManyCreateAssociationMixin<businesscategory>;
  removeBusinesscategory!: Sequelize.HasManyRemoveAssociationMixin<businesscategory, businesscategoryId>;
  removeBusinesscategories!: Sequelize.HasManyRemoveAssociationsMixin<businesscategory, businesscategoryId>;
  hasBusinesscategory!: Sequelize.HasManyHasAssociationMixin<businesscategory, businesscategoryId>;
  hasBusinesscategories!: Sequelize.HasManyHasAssociationsMixin<businesscategory, businesscategoryId>;
  countBusinesscategories!: Sequelize.HasManyCountAssociationsMixin;
  // business hasMany businesscoordinate via business_id
  businesscoordinates!: businesscoordinate[];
  getBusinesscoordinates!: Sequelize.HasManyGetAssociationsMixin<businesscoordinate>;
  setBusinesscoordinates!: Sequelize.HasManySetAssociationsMixin<businesscoordinate, businesscoordinateId>;
  addBusinesscoordinate!: Sequelize.HasManyAddAssociationMixin<businesscoordinate, businesscoordinateId>;
  addBusinesscoordinates!: Sequelize.HasManyAddAssociationsMixin<businesscoordinate, businesscoordinateId>;
  createBusinesscoordinate!: Sequelize.HasManyCreateAssociationMixin<businesscoordinate>;
  removeBusinesscoordinate!: Sequelize.HasManyRemoveAssociationMixin<businesscoordinate, businesscoordinateId>;
  removeBusinesscoordinates!: Sequelize.HasManyRemoveAssociationsMixin<businesscoordinate, businesscoordinateId>;
  hasBusinesscoordinate!: Sequelize.HasManyHasAssociationMixin<businesscoordinate, businesscoordinateId>;
  hasBusinesscoordinates!: Sequelize.HasManyHasAssociationsMixin<businesscoordinate, businesscoordinateId>;
  countBusinesscoordinates!: Sequelize.HasManyCountAssociationsMixin;
  // business hasMany businessimage via business_id
  businessimages!: businessimage[];
  getBusinessimages!: Sequelize.HasManyGetAssociationsMixin<businessimage>;
  setBusinessimages!: Sequelize.HasManySetAssociationsMixin<businessimage, businessimageId>;
  addBusinessimage!: Sequelize.HasManyAddAssociationMixin<businessimage, businessimageId>;
  addBusinessimages!: Sequelize.HasManyAddAssociationsMixin<businessimage, businessimageId>;
  createBusinessimage!: Sequelize.HasManyCreateAssociationMixin<businessimage>;
  removeBusinessimage!: Sequelize.HasManyRemoveAssociationMixin<businessimage, businessimageId>;
  removeBusinessimages!: Sequelize.HasManyRemoveAssociationsMixin<businessimage, businessimageId>;
  hasBusinessimage!: Sequelize.HasManyHasAssociationMixin<businessimage, businessimageId>;
  hasBusinessimages!: Sequelize.HasManyHasAssociationsMixin<businessimage, businessimageId>;
  countBusinessimages!: Sequelize.HasManyCountAssociationsMixin;
  // business hasMany businesslocation via business_id
  businesslocations!: businesslocation[];
  getBusinesslocations!: Sequelize.HasManyGetAssociationsMixin<businesslocation>;
  setBusinesslocations!: Sequelize.HasManySetAssociationsMixin<businesslocation, businesslocationId>;
  addBusinesslocation!: Sequelize.HasManyAddAssociationMixin<businesslocation, businesslocationId>;
  addBusinesslocations!: Sequelize.HasManyAddAssociationsMixin<businesslocation, businesslocationId>;
  createBusinesslocation!: Sequelize.HasManyCreateAssociationMixin<businesslocation>;
  removeBusinesslocation!: Sequelize.HasManyRemoveAssociationMixin<businesslocation, businesslocationId>;
  removeBusinesslocations!: Sequelize.HasManyRemoveAssociationsMixin<businesslocation, businesslocationId>;
  hasBusinesslocation!: Sequelize.HasManyHasAssociationMixin<businesslocation, businesslocationId>;
  hasBusinesslocations!: Sequelize.HasManyHasAssociationsMixin<businesslocation, businesslocationId>;
  countBusinesslocations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof business {
    return business.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    review_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transactions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    disploy_phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    distance: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'business',
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
    ]
  });
  }
}
