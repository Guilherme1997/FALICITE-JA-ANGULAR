import { BaseResourceModel } from "../../../../shared/componentes/models/base-resource.models";

export class Category extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string,
    public description?: string
  ){
    super();
  }
  

  static fromJson(jsonData: any): Category {
    return Object.assign(new Category(), jsonData);
  }
}