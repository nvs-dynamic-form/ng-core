import { FieldBase } from './field-base.type';

export class ChipsField extends FieldBase<Array<string>> {
  override readonly fieldType? = 'chips';
  chipsItems?: Array<string>;
  selectedChipsItems?: Array<string>;
  onlyDefaultTags?: boolean;

  constructor(options: ChipsField) {
    super(options, []);
    this.onlyDefaultTags = options.onlyDefaultTags ?? false;
    this.selectedChipsItems = options.selectedChipsItems ?? [];
    this.chipsItems = options.chipsItems ?? [];
  }

  addItem(value: string): void {
    this.selectedChipsItems!.push(value);
  }

  removeItem(value: string): void {
    this.selectedChipsItems = this.selectedChipsItems!.filter(
      (chip) => chip !== value,
    );
  }
}
