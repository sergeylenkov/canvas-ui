import { ScreenContext } from './screen';
import { Widget } from './widget';

export class Column extends Widget {
  layout(context: ScreenContext) {
    let y = this.y;
    let width = 0;
    let height = 0;

    this.children.forEach((child: Widget) => {
      child.layout(context);

      child.y = y;
      child.x = this.x;

      y = y + child.height;
      height = height + child.height;

      if (child.width > width) {
        width = child.width;
      }
    });

    super.layout(context);
  }
}
