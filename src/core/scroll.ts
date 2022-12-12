import { ScreenContext } from './screen';
import { Widget } from './widget';

export class ScrollView extends Widget {
  public layout(context: ScreenContext): void {
    this.y = this.y + context.mouseWheel.y * -0.2;

    if (this.y > 0) {
      this.y = 0;
    }

    this.children[0].y = this.y;
    super.layout(context);
  }

  render(context: ScreenContext): void {
    this.clear(context);
    super.render(context);
  }
}
