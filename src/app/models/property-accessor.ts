export interface PropertyAccessor {
  propertyName: string;
  accessor(object: Object): any;
}
