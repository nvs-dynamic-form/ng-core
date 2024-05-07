import { FieldBase } from './field-base.type';

export class DropdownField<ValueType> extends FieldBase<ValueType> {
  override readonly controlType?: 'dropdown' = 'dropdown';
  options?: Array<{
    label: string;
    value: ValueType;
  }>;

  onSelectionChange?:
    | ((event: Event) => void)
    | ((event: Event) => Promise<void>);

  constructor(options: DropdownField<ValueType>) {
    super(options, undefined);
    this.options = options.options ?? [];
  }
}
