import { FieldBase } from './field-base.type';

export class ChipsField extends FieldBase<Array<string>> {
  override readonly controlType?: 'chips' = 'chips';
  chipsItems?: Array<string>;
  onlyDefaultTags?: boolean;

  constructor(options: ChipsField) {
    super(options);
    this.onlyDefaultTags = options.onlyDefaultTags ?? false;
    this.chipsItems = options.chipsItems ?? [];
    this.defaultValue = options.defaultValue ?? [];
  }
}
