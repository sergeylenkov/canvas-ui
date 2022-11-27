import { ScreenContext } from './screen';
import { Widget } from './widget';

export class Column extends Widget {
  layout(context: ScreenContext) {
    let y = this.y;

    this.children.forEach((child: Widget) => {
      child.layout(context);

      child.y = y;
      child.x = this.x;

      y = y + child.height;
    });

    super.layout(context);
  }
}
