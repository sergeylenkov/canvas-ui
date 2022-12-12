import { TextStyle } from './core/text-style';
import { WidgetOptions } from './core/widget';
import { CollectionView, CardsOptions } from './core/collection';
import { Column } from './core/column';
import { Text } from './core/text';
import { ImageView } from './core/image';

export interface CardOptions extends WidgetOptions {
  title: string;
  subtitle: string;
}

export class Card extends Column {
  constructor(options: CardOptions) {
    super(options);

    this.children = [
      new ImageView({
        width: 100,
        height: 100,
        src: 'test2.png'
      }),
      new Text({
        text: options.title,
        style: new TextStyle({color: 'rgb(0,0,0)', size: 14,  bold: true })
      }),
      new Text({
        text: options.subtitle,
        style: new TextStyle({color: 'rgb(0,0,0)', size: 12 })
      }),
    ]
  }
}

export class Cards extends CollectionView {
  constructor(options: CardsOptions) {
    super(options);

    let index = 0;
    const items = new Array(400).fill(0).map(i => ++index);

    this.children = []

    items.forEach(item => {
      const card = new Card({ title: `Title ${item}`, subtitle: `Subtitle ${item}` });

      this.children.push(card);
    });
  }
}
