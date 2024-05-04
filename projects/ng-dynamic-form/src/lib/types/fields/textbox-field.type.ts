import { TemplateRef } from '@angular/core';
import { FieldBase } from './field-base.type';

export class TextboxField extends FieldBase<string> {
  override readonly controlType?: 'textbox' = 'textbox';
  icon?: TemplateRef<any>;
  onIconClick?: (value?: string) => void;

  constructor(options: TextboxField) {
    super(options);
    this.icon = options.icon;
    this.onIconClick = options.onIconClick;
  }
}
