import { Observer } from './observer';
import { ScreenContext } from './screen';
import { TextStyle } from './text-style';
import { Widget, WidgetOptions } from './widget';

export interface TextOptions extends WidgetOptions {
  text: string | Observer<string>;
  style: TextStyle;
}

export class Text extends Widget {
  private text: string = '';
  private style: TextStyle;
  private observer?: Observer<string>;

  constructor(options: TextOptions) {
    super(options);

    this.style = options.style;

    if (typeof options.text === 'string') {
      this.text = options.text;
    } else if (options.text instanceof Observer) {
      this.observer = options.text;
      this.text = this.observer!.value;

      this.observer.delegate = () => {
        this.width = 0;
        this.height = 0;

        this.text = this.observer!.value;
      }
    }
  }

  private setFontStyle(context: ScreenContext) {
    console.log(this.style.build());
    context.renderContext.font = this.style.build();
    context.renderContext.textBaseline = 'top';
    context.renderContext.textAlign = 'start';
  }

  public layout(context: ScreenContext) {
    if (this.width === 0 || this.height === 0) {
      this.setFontStyle(context);

      const measure = context.renderContext.measureText(this.text);

      this.width = Math.floor(measure.width);
      this.height = Math.floor(measure.fontBoundingBoxDescent);
    }

    super.layout(context);
  }

  public render(context: ScreenContext) {
    this.setFontStyle(context);

    context.renderContext.fillStyle = this.style.color;
    context.renderContext.fillText(this.text, this.x, this.y);

    super.render(context);
  }
}
