import { FieldBase } from './field-base.type';

export class DropdownField<ValueType> extends FieldBase<ValueType> {
  override readonly controlType = 'dropdown';
  placeholder?: string;
  options?: Array<{
    label: string;
    value: ValueType;
  }>;

  onSelectionChange?:
    | ((event: Event) => void)
    | ((event: Event) => Promise<void>);

  constructor(options: DropdownField<ValueType>) {
    super(options);
    this.options = options.options ?? [];
    this.placeholder = options.placeholder ?? '';
  }
}
