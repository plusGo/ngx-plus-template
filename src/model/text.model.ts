export type TextType = 'markdown' | 'plainText';

export class BlockText {
  type: TextType;
  text: string;
  emoji = false;

  constructor(text: string, type: TextType = 'plainText') {
    this.type = type;
    this.text = text;
  }
}

export class PlainText extends BlockText {
  constructor(text: string) {
    super(text, 'plainText');
  }
}

export class MarkdownText extends BlockText {
  constructor(text: string) {
    super(text, 'markdown');
  }
}


