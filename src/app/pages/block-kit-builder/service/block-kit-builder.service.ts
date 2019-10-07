import {Injectable} from '@angular/core';
import {Section} from '../../../../model/section.model';
import {MarkdownText, PlainText} from '../../../../model/text.model';
import {BlockImage} from '../../../../model/image.model';
import {Context} from '../../../../model/context.model';
import {BlockButton} from '../../../../model/button.model';
import {Actions} from '../../../../model/actions.model';
import {Divider} from '../../../../model/divider.model';
import {MultiStaticSelect, Overflow, StaticSelect, StaticSelectOption} from '../../../../model/static-select.model';
import {DatePicker} from '../../../../model/date-picker.model';
import {BlockInput, PlainTextInput} from '../../../../model/input.model';

@Injectable(
  {providedIn: 'root'}
)
export class BlockKitBuilderService {


  addBlockUI(blockData: any, blockUI: string): any {
    const blocks = [...(blockData.blocks || [])] as any;
    if (blockUI === 'Section') {
      const section = Section.builder()
        .text(new MarkdownText('这一个markdown语法的块级元素，**可以加粗**,~~可以中划线~~,可以[链接](https://www.baidu.com)。你还可以自己尝试更多的markdown语法'))
        .build();
      blocks.push(section);
    }
    if (blockUI === 'Image') {
      const section = BlockImage.builder()
        .altText('测试图片')
        .imageUrl('/assets/images/beagle.png')
        .title(new PlainText('测试照片'))
        .build();
      blocks.push(section);
    }
    if (blockUI === 'Context') {
      const section = new Context([
        new MarkdownText('**Author:** T. M. Schwartz'),
        BlockImage.builder()
          .altText('测试图片')
          .imageUrl('/assets/images/beagle.png')
          .title(new PlainText('测试照片'))
          .build()
      ]);
      blocks.push(section);
    }
    if (blockUI === 'Actions') {
      const button = BlockButton.builder()
        .style('primary')
        .text(new PlainText('确认'))
        .build();
      const section = new Actions([button]).and(button);
      blocks.push(section);
    }
    if (blockUI === 'Divider') {
      blocks.push(new Divider());
    }
    if (blockUI === 'Section with BlockImage') {
      const section = Section.builder()
        .text(new MarkdownText('可以在这个块级元素后尾加入照片'))
        .accessory(BlockImage.builder()
          .altText('测试图片')
          .imageUrl('/assets/images/beagle.png')
          .title(new PlainText('测试照片'))
          .build())
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with BlockButton') {
      const section = Section.builder()
        .text(new MarkdownText('可以在这个块级元素后尾加入按钮'))
        .accessory(BlockButton.builder()
          .text(new PlainText('确认'))
          .build())
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with Select') {
      const select = new StaticSelect(
        new PlainText('选择你喜欢的水果'),
        [
          new StaticSelectOption(new PlainText('苹果'), 'apple'),
          new StaticSelectOption(new PlainText('香蕉'), 'banana'),
          new StaticSelectOption(new PlainText('西瓜'), 'banana1'),
        ]
      );
      const section = Section.builder()
        .text(new MarkdownText('可以在这个块级元素后尾加入单选'))
        .accessory(select)
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with Multi-Select') {
      const select = new MultiStaticSelect(
        new PlainText('选择你喜欢的水果'),
        [
          new StaticSelectOption(new PlainText('苹果'), 'apple'),
          new StaticSelectOption(new PlainText('香蕉'), 'banana'),
          new StaticSelectOption(new PlainText('西瓜'), 'banana1'),
        ]
      );
      const section = Section.builder()
        .text(new MarkdownText('可以在这个块级元素后尾加入多选'))
        .accessory(select)
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with Overflow') {
      const select = new Overflow(
        new PlainText('选择你喜欢的水果'),
        [
          new StaticSelectOption(new PlainText('苹果'), 'apple'),
          new StaticSelectOption(new PlainText('香蕉'), 'banana'),
          new StaticSelectOption(new PlainText('西瓜'), 'banana1'),
          new StaticSelectOption(new PlainText('西红柿'), 'banana1'),
          new StaticSelectOption(new PlainText('李子'), 'banana1'),
          new StaticSelectOption(new PlainText('葡萄'), 'banana1'),
        ]
      );
      const section = Section.builder()
        .text(new MarkdownText('可以在这个块级元素后尾加入多选'))
        .accessory(select)
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with DatePicker') {
      const datePicker = new DatePicker(
        new PlainText('请选择')
      );
      const section = Section.builder()
        .text(new MarkdownText('选择最后要求的日期'))
        .accessory(datePicker)
        .build();
      blocks.push(section);
    }

    if (blockUI === 'Section with Fields') {
      const section = Section.builder()
        .fields([
          new PlainText('**我是一个文本**'),
          new PlainText('**我是一个文本**'),
          new PlainText('**我是一个文本**'),
          new PlainText('**我是一个文本**'),
          new PlainText('**我是一个文本**'),
          new PlainText('**我是一个文本**'),
        ])
        .build();
      blocks.push(section);
    }
    if (blockUI === 'Input with DatePicker') {
      const datePicker = new DatePicker(new PlainText('出生日期'), '1994-04-01');
      const section = new BlockInput(datePicker, new PlainText('输入账号错误'));
      blocks.push(section);
    }
    if (blockUI === 'Input with Multiline') {
      const datePicker = new PlainTextInput(true, new PlainText('输入您的手机号'));
      const section = new BlockInput(datePicker, new PlainText('输入账号错误'));
      blocks.push(section);
    }

    if (blockUI === 'Input with SingleLine') {
      const datePicker = new PlainTextInput(false, new PlainText('输入您的手机号'));
      const section = new BlockInput(datePicker, new PlainText('输入账号错误'));
      blocks.push(section);
    }


    return blocks;
  }
}
