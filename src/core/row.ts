import { ScreenContext } from './screen';
import { Widget } from './widget';

export class Row extends Widget {
  layout(context: ScreenContext) {
    let x = this.x;

    this.children.forEach((child: Widget) => {
      child.layout(context);

      child.x = x;
      child.y = this.y;

      x = x + child.width;
    });

    super.layout(context);
  }
}
