import { MouseEventType, ScreenContext } from './screen';
import { Rect } from './rect';
import { Text } from './text';
import { Widget, WidgetOptions } from './widget';
import { TextStyle } from './text-style';

export interface ButtonOptions extends WidgetOptions {
  title: string;
  onClick: () => void;
}

export class Button extends Widget {
  private onClick: () => void;

  constructor(options: ButtonOptions) {
    super(options);

    this.onClick = options.onClick;

    this.children = [
      new Rect({
        width: options.width,
        height: options.height,
        backgroundColor: 'rgb(50, 100, 100)'
      }),
      new Text({
        text: options.title,
        style: new TextStyle({ color: 'rgb(255,255,255)', size: 14, bold: true })
      }),
    ]
  }

  public layout(context: ScreenContext): void {
    super.layout(context);

    const rect = this.children[0];
    const text = this.children[1];

    const centerY = this.height / 2;
    const centerX = this.width / 2;

    rect.x = this.x;
    rect.y = this.y;

    text.y = Math.floor(rect.y + centerY - text.height / 2);
    text.x = Math.floor(rect.x + centerX - text.width / 2);
  }

  public update(context: ScreenContext): void {
    super.update(context);

    if (context.mouseEventType === MouseEventType.Click) {
      const rect = this.children[0];

      if (context.mouseEvent.x >= this.x && context.mouseEvent.x <= this.x + this.width) {
        if (context.mouseEvent.y >= this.y && context.mouseEvent.y <= this.y + this.height) {
          this.onClick();
        }
      }
    }
  }
}
