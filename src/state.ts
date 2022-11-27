import { Button } from './core/button';
import { Text } from './core/text';
import { Widget, WidgetOptions } from './core/widget';
import { Row } from './core/row';

export class StateWidget extends Widget {
  private count = 0;

  constructor(options: WidgetOptions) {
    super(options);

    this.children = [
      new Row({
        x: options.x,
        y: options.y,
        children: [
          new Text({
            text: `Count: ${this.count}`,
            color: 'rgb(0,0,0)',
            size: 14,
            bold: true
          }),
          new Button({
            width: 100,
            height: 50,
            title: 'Click',
            onClick: () => {
              this.count = this.count + 1;
            }
          })
        ]
      })
    ]
  }
}
