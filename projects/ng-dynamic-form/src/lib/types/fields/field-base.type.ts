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
  screenSize?: ScreenSizeType | IScreenSize;
  customErrorMessages?: Array<{ key: string; message: string }>;
  validators?: Array<ValidatorFn>;
  onFocus?:
    | ((event: FocusEvent) => void)
    | ((event: FocusEvent) => Promise<void>);
  onChange?: ((event: Event) => void) | ((event: Event) => Promise<void>);

  constructor(options: FieldBase<ValueType>, defaultValue?: ValueType) {
    this.defaultValue = options.defaultValue ?? defaultValue;
    this.key = options.key;
    this.label = options.label;
    this.placeholder = options.placeholder ?? '';
    this.screenSize = options.screenSize ?? 12;
    this.customErrorMessages = options.customErrorMessages ?? [];
    this.validators = options.validators ?? [];
  }
}
