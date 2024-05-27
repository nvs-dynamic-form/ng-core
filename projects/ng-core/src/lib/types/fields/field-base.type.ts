import { IScreenSize, ScreenSizeType } from '../screen-size.type';

import { ValidatorFn } from '@angular/forms';

export abstract class FieldBase<ValueType> {
  key: string;
  label: string;
  defaultValue?: ValueType;
  fieldType?: string;
  screenSize?: ScreenSizeType | IScreenSize;
  customErrorMessages?: Array<{ key: string; message: string }>;
  validators?: Array<ValidatorFn>;
  onFocus?:
    | ((event: FocusEvent) => void)
    | ((event: FocusEvent) => Promise<void>);
  onChange?: ((event: Event) => void) | ((event: Event) => Promise<void>);

  constructor(options: FieldBase<ValueType>, fieldDefaultValue?: ValueType) {
    this.defaultValue = options.defaultValue ?? fieldDefaultValue;
    this.key = options.key;
    this.label = options.label;
    this.screenSize = options.screenSize ?? 12;
    this.customErrorMessages = options.customErrorMessages ?? [];
    this.validators = options.validators ?? [];
  }
}
