import { FieldBase } from './field-base.type';

export class TextareaField extends FieldBase<string> {
  override readonly controlType?: 'textarea' = 'textarea';
  minRowSize?: number;
  maxRowSize?: number;

  constructor(options: TextareaField) {
    super(options, '');
    this.minRowSize = options.minRowSize ?? 3;
    this.maxRowSize = options.maxRowSize ?? 10;
  }
}
