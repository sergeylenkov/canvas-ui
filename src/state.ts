import { Button } from './core/button';
import { Text } from './core/text';
import { Widget, WidgetOptions } from './core/widget';
import { Row } from './core/row';
import { Observer } from './core/observer';
import { Screen, ScreenContext } from './core/screen';

export class StateWidget extends Widget {
  private counter = new Observer<string>('Count: 0');
  private count = 0;

  constructor(options: WidgetOptions) {
    super(options);

    this.children = [
      new Row({
        x: options.x,
        y: options.y,
        children: [
          new Text({
            text: this.counter,
            color: 'rgb(0,0,0)',
            size: 14,
            bold: true
          }),
          new Button({
            width: 100,
            height: 50,
            title: 'Click',
            onClick: () => {
              console.log('Click', this.counter.value);
              this.count++;
              this.counter.value = `Count: ${this.count}`;

              this.layout(Screen.context);
              this.render(Screen.context);
            }
          })
        ]
      })
    ]
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
