import {BlockText, PlainText} from './text.model';
import {BlockButton} from './button.model';
import {BlockImage} from './image.model';
import {DatePicker} from './date-picker.model';

export type ActionType = 'button' | 'staticSelect' | 'multiStaticSelect' | 'overflow' | 'datePicker';
export type BlockType = 'actions' | 'section' | 'image' | 'context' | 'input' | 'divider';
export type InputType = 'plainTextInput' | 'conversations_select';

export class Action {
  type: ActionType;
}

export class Block {
  type: BlockType;
  blockId: string;
}


export class Section extends Block {
  type: BlockType = 'section';
  text: BlockText;
  accessory: Action | BlockButton | BlockImage;
  fields: BlockText[];

  public static builder(): SectionBuilder {
    return new SectionBuilder();
  }
}

class SectionBuilder {
  private section: Section = new Section();

  text(text: BlockText): SectionBuilder {
    this.section.text = text;
    return this;
  }

  fields(texts: BlockText[]): SectionBuilder {
    this.section.fields = texts;
    return this;
  }

  accessory(action: Action | BlockButton | BlockImage): SectionBuilder {
    this.section.accessory = action;
    return this;
  }

  build(): Section {
    return this.section;
  }
}

export class Modal {
  type = 'modal';
  title: PlainText;
  submit: PlainText;
  close: PlainText;
  blocks: Block[];
}
