import {PlainText} from './text.model';
import {Action, ActionType} from './section.model';

export class StaticSelectOption {
  text: PlainText; // 只能为plainText
  value: string;

  constructor(text: PlainText, value: string = '') {
    this.text = text;
    this.value = value;
  }
}

export class StaticSelect extends Action {
  type: ActionType = 'staticSelect';
  placeholder: PlainText; // 只能为plainText
  options: StaticSelectOption[];


  constructor(placeholder: PlainText, options: StaticSelectOption[]) {
    super();
    this.type = 'staticSelect';
    this.placeholder = placeholder;
    this.options = options;
  }
}

export class MultiStaticSelect extends StaticSelect {
  type: ActionType = 'multiStaticSelect';

  constructor(placeholder: PlainText, options: StaticSelectOption[]) {
    super(placeholder, options);
  }
}

export class Overflow extends StaticSelect {
  type: ActionType = 'overflow';

  constructor(placeholder: PlainText, options: StaticSelectOption[]) {
    super(placeholder, options);
  }
}
