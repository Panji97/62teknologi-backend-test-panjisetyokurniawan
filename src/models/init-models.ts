import type { Sequelize } from "sequelize";
import { business as _business } from "./business";
import type { businessAttributes, businessCreationAttributes } from "./business";
import { businesscategory as _businesscategory } from "./businesscategory";
import type { businesscategoryAttributes, businesscategoryCreationAttributes } from "./businesscategory";
import { businesscoordinate as _businesscoordinate } from "./businesscoordinate";
import type { businesscoordinateAttributes, businesscoordinateCreationAttributes } from "./businesscoordinate";
import { businessimage as _businessimage } from "./businessimage";
import type { businessimageAttributes, businessimageCreationAttributes } from "./businessimage";
import { businesslocation as _businesslocation } from "./businesslocation";
import type { businesslocationAttributes, businesslocationCreationAttributes } from "./businesslocation";

export {
  _business as business,
  _businesscategory as businesscategory,
  _businesscoordinate as businesscoordinate,
  _businessimage as businessimage,
  _businesslocation as businesslocation,
};

export type {
  businessAttributes,
  businessCreationAttributes,
  businesscategoryAttributes,
  businesscategoryCreationAttributes,
  businesscoordinateAttributes,
  businesscoordinateCreationAttributes,
  businessimageAttributes,
  businessimageCreationAttributes,
  businesslocationAttributes,
  businesslocationCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const business = _business.initModel(sequelize);
  const businesscategory = _businesscategory.initModel(sequelize);
  const businesscoordinate = _businesscoordinate.initModel(sequelize);
  const businessimage = _businessimage.initModel(sequelize);
  const businesslocation = _businesslocation.initModel(sequelize);

  businesscategory.belongsTo(business, { as: "business", foreignKey: "business_id"});
  business.hasMany(businesscategory, { as: "businesscategories", foreignKey: "business_id"});
  businesscoordinate.belongsTo(business, { as: "business", foreignKey: "business_id"});
  business.hasMany(businesscoordinate, { as: "businesscoordinates", foreignKey: "business_id"});
  businessimage.belongsTo(business, { as: "business", foreignKey: "business_id"});
  business.hasMany(businessimage, { as: "businessimages", foreignKey: "business_id"});
  businesslocation.belongsTo(business, { as: "business", foreignKey: "business_id"});
  business.hasMany(businesslocation, { as: "businesslocations", foreignKey: "business_id"});

  return {
    business: business,
    businesscategory: businesscategory,
    businesscoordinate: businesscoordinate,
    businessimage: businessimage,
    businesslocation: businesslocation,
  };
}
