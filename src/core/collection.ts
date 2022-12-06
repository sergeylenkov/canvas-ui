import { ScreenContext } from './screen';
import { Widget, WidgetOptions } from './widget';

type CardSize = { width: number, height: number };

export interface CardsOptions extends WidgetOptions {
  cardSize: CardSize;
}

export class CollectionView extends Widget {
  private cardSize: CardSize;

  constructor(options: CardsOptions) {
    super(options);

    this.cardSize = options.cardSize;
  }

  public layout(context: ScreenContext): void {
    super.layout(context);

    let x = this.x;
    let y = this.y;

    this.children.forEach((child: Widget) => {
      child.x = x;
      child.y = y;
      child.width = this.cardSize.width;
      child.height = this.cardSize.height;

      x = x + child.width;

      if (x > this.width - child.width) {
        x = this.x;
        y = y + child.height;
      }

      child.layout(context);
    });
  }
}
