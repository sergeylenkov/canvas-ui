import { Button } from './core/button';
import { Text } from './core/text';
import { WidgetOptions } from './core/widget';
import { Row } from './core/row';
import { Observer } from './core/observer';
import { Screen, ScreenContext } from './core/screen';
import { TextStyle } from './core/text-style';

export class StateWidget extends Row {
  private counter = new Observer<string>('Count: 0');
  private count = 0;

  constructor(options: WidgetOptions) {
    super(options);

    this.children = [
      new Text({
        text: this.counter,
        style: new TextStyle({color: 'rgb(0,0,0)', size: 14,  bold: true })
      }),
      new Button({
        width: 80,
        height: 30,
        title: 'Click',
        onClick: () => {
          this.count++;
          this.counter.value = `Count: ${this.count}`;

          this.layout(Screen.context);
          this.render(Screen.context);
        }
      })
    ]
  }

  public render(context: ScreenContext): void {
    this.clear(context);
    super.render(context);
  }
}
