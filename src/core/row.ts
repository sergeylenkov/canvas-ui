import { ScreenContext } from './screen';
import { Widget } from './widget';

export class Row extends Widget {
  layout(context: ScreenContext) {
    let x = this.x;
    let width = 0;
    let height = 0;

    this.children.forEach((child: Widget) => {
      child.layout(context);

      child.x = x;
      child.y = this.y;

      x = x + child.width;
      width = width + child.width;

      if (child.height > height) {
        height = child.height;
      }
    });

    this.width = width;
    this.height = height;

    super.layout(context);
  }
}
