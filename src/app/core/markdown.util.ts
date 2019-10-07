import * as MarkdownIt from 'markdown-it';

export class MarkdownItUtil {
  private static md = new MarkdownIt({
    html: true,
    xhtmlOut: true,
  });

  constructor() {
  }

  public static render(md: string) {
    return this.md.render(md);
  }

}
