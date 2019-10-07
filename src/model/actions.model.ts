import {Action, Block, BlockType} from './section.model';

export class Actions extends Block {
  type: BlockType = 'actions';
  elements: Action[];

  constructor(elements: Action[]) {
    super();
    this.elements = elements;
  }

  and(element: Action): Actions {
    this.elements = this.elements || [];
    this.elements.push(element);
    return this;
  }
}
