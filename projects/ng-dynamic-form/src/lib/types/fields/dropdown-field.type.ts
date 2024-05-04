import { FieldBase } from './field-base.type';

export class DropdownField<ValueType> extends FieldBase<ValueType> {
  override readonly controlType?: 'dropdown' = 'dropdown';
  options?: Array<{
    label: string;
    value: ValueType;
  }>;

  onSelectionChange?:
    | ((selectedValue: ValueType) => void)
    | ((selectedValue: ValueType) => Promise<void>);

  constructor(options: DropdownField<ValueType>) {
    super(options);
    this.options = options.options ?? [];
  }
}
