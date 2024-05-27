import { FieldBase } from './field-base.type';

export class CheckboxField extends FieldBase<boolean> {
  override readonly controlType = 'checkbox';

  constructor(options: CheckboxField) {
    super(options);
    this.defaultValue = options.defaultValue ?? false;
  }
}
