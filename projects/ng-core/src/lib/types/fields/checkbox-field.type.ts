import { FieldBase } from './field-base.type';

export class CheckboxField extends FieldBase<boolean> {
  override readonly fieldType? = 'checkbox';

  constructor(options: CheckboxField) {
    super(options);
    this.defaultValue = options.defaultValue ?? false;
  }
}
