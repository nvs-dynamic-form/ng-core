import { FieldBase } from './fields/field-base.type';

export class FormFieldComponents {
  [key: string]: {
    component: any;
    class: typeof FieldBase<any>;
  };
}
