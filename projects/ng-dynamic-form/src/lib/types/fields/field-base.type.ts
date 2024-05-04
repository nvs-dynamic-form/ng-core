import { IScreenSize, ScreenSizeType } from '../screen-size.type';

import { ValidatorFn } from '@angular/forms';

export type TControlTypes =
  | 'textbox'
  | 'dropdown'
  | 'checkbox'
  | 'textarea'
  | 'chips';

export abstract class FieldBase<ValueType> {
  key: string;
  label: string;
  defaultValue?: ValueType;
  controlType?: TControlTypes;
  placeholder?: string;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  screenSize?: ScreenSizeType | IScreenSize;
  customErrorMessages?: Array<{ key: string; message: string }>;
  validators?: Array<ValidatorFn>;

  constructor(options: FieldBase<ValueType>) {
    this.defaultValue = options.defaultValue;
    this.key = options.key;
    this.label = options.label;
    this.placeholder = options.placeholder ?? '';
    this.type = options.type ?? 'text';
    this.screenSize = options.screenSize ?? 12;
    this.customErrorMessages = options.customErrorMessages ?? [];
    this.validators = options.validators ?? [];
  }
}
