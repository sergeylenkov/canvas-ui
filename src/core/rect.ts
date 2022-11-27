import { ScreenContext } from './screen';
import { Widget, WidgetOptions } from './widget';

export interface RectOptions extends WidgetOptions {
  backgroundColor: string;
}

export class Rect extends Widget {
  private backgroundColor: string = 'rgb(0,0,0)';

  constructor(options: RectOptions) {
    super(options);

    this.backgroundColor = options.backgroundColor || 'rgb(0,0,0)';
  }

  public render(context: ScreenContext) {
    context.renderContext.fillStyle = this.backgroundColor;
    context.renderContext.fillRect(this.x, this.y, this.width, this.height);

    super.render(context);
  }
}
