import {BlockText} from './text.model';
import {Action, ActionType} from './section.model';

export type ButtonStyle = 'basic' | 'primary' | 'accent' | 'warn' ;

export class BlockButton extends Action {
  type: ActionType = 'button';
  text: BlockText;
  value: string;
  style: ButtonStyle = 'basic';

  public static builder(): BlockButtonBuilder {
    return new BlockButtonBuilder();
  }
}

export class BlockButtonBuilder {
  private button: BlockButton = new BlockButton();

  text(text: BlockText): BlockButtonBuilder {
    this.button.text = text;
    return this;
  }

  value(value: string): BlockButtonBuilder {
    this.button.value = value;
    return this;
  }

  style(style: ButtonStyle): BlockButtonBuilder {
    this.button.style = style;
    return this;
  }


  build(): BlockButton {
    return this.button;
  }
}
