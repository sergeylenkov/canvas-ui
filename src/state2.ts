import { Button } from './core/button';
import { Text } from './core/text';
import { Widget, WidgetOptions } from './core/widget';
import { Row } from './core/row';
import { Screen, ScreenContext } from './core/screen';

export class State2Widget extends Widget {
  private count = 0;

  constructor(options: WidgetOptions) {
    super(options);

    this.rerender(options);
  }

  public rerender(options: WidgetOptions): void {
    this.children = [
        new Row({
          x: options.x,
          y: options.y,
          children: [
            new Text({
              text: `Counter2: ${this.count}`,
              color: 'rgb(0,0,0)',
              size: 14,
              bold: true
            }),
            new Button({
              width: 100,
              height: 50,
              title: 'Click',
              onClick: () => {
                this.count++;
                this.rerender(options);
              }
            })
          ]
        })
      ]

    if (Screen.context) {
        this.layout(Screen.context);
        this.render(Screen.context);
    }
  }

  public layout(context: ScreenContext): void {
    super.layout(context);

    this.width = this.children[0].width;
    this.height = this.children[0].height;
  }

  public render(context: ScreenContext): void {
    context.renderContext.clearRect(this.x, this.y, this.width, this.height);
    super.render(context);
  }
}
