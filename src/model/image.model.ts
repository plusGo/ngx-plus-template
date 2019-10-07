import {BlockText} from './text.model';
import {Block, BlockType} from './section.model';

export class BlockImage extends Block {
  type: BlockType = 'image';
  imageUrl: string;
  altText: string;
  title: BlockText;

  public static builder(): ImageBuilder {
    return new ImageBuilder();
  }
}

export class ImageBuilder {
  private image: BlockImage = new BlockImage();

  build(): BlockImage {
    return this.image;
  }

  title(text: BlockText): ImageBuilder {
    this.image.title = text;
    return this;
  }

  altText(altText: string): ImageBuilder {
    this.image.altText = altText;
    return this;
  }


  imageUrl(imageUrl: string): ImageBuilder {
    this.image.imageUrl = imageUrl;
    return this;
  }

}
