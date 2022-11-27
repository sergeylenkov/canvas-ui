import { ScreenContext } from './screen';
import { Rect } from './rect';
import { Text } from './text';
import { Widget, WidgetOptions } from './widget';

export interface ButtonOptions extends WidgetOptions {
  title: string;
  onClick: () => void;
}

export class Button extends Widget {
  constructor(options: ButtonOptions) {
    super(options);

    this.children = [
      new Rect({
        width: options.width,
        height: options.height,
        backgroundColor: 'rgb(50, 100, 100)'
      }),
      new Text({
        text: options.title,
        color: 'rgb(255,255,255)',
        size: 14,
        bold: true
      }),
    ]
  }

  public layout(context: ScreenContext): void {
    super.layout(context);

    const rect = this.children[0];
    const text = this.children[1];

    const centerY = rect.height / 2;
    const centerX = rect.width / 2;

    rect.x = this.x;
    rect.y = this.y;

    text.y = rect.y + centerY - text.height / 2;
    text.x = rect.x + centerX - text.width / 2;
  }
}
