export class SubmitButton {
  component!: any;
  defaultOptions!: SubmitButtonOptions;
}

export class SubmitButtonOptions {
  visible!: boolean;
  label!: string;
  isFullWidth!: boolean;
  position!: 'left' | 'right' | 'center';
}
