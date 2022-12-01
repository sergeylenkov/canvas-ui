import { Button } from './core/button';
import { Text } from './core/text';
import { WidgetOptions } from './core/widget';
import { Row } from './core/row';
import { Screen, ScreenContext } from './core/screen';
import { TextStyle } from './core/text-style';

export class State2Widget extends Row {
  private count = 0;

  constructor(options: WidgetOptions) {
    super(options);

    this.rerender(options);
  }

  public rerender(options: WidgetOptions): void {
    this.children = [
      new Text({
        text: `Counter2: ${this.count}`,
        style: new TextStyle({ color: 'rgb(0,0,0)', size: 14, bold: true })
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

    if (Screen.context) {
        this.layout(Screen.context);
        this.render(Screen.context);
    }
  }

  public render(context: ScreenContext): void {
    this.clear(context);
    super.render(context);
  }
}
