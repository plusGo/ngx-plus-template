import {BlockText} from './text.model';
import {BlockImage} from './image.model';
import {Block, BlockType} from './section.model';

export class Context extends Block {
  type: BlockType = 'context';
  elements: BlockText[] | BlockImage[] | any[];


  constructor(elements: BlockText[] | BlockImage[] | any[]) {
    super();
    this.elements = elements;
  }
}
