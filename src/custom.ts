import { ScreenContext } from './core/screen';
import { Rect } from './core/rect';
import { Text } from './core/text';
import { Widget, WidgetOptions } from './core/widget';

export class CustomWidget extends Widget {
  constructor(options: WidgetOptions) {
    super(options);

    this.children = [
      new Rect({
        x: options.x,
        y: options.y,
        width: options.width,
        height: options.height,
        backgroundColor: 'rgb(50, 100, 100)'
      }),
      new Text({
        x: 0,
        y: 0,
        text: 'Button',
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

    text.y = rect.y + centerY - text.height / 2;
    text.x = rect.x + centerX - text.width / 2;
  }
}
