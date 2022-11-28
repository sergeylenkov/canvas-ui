import { Observer } from './observer';
import { ScreenContext } from './screen';
import { Widget, WidgetOptions } from './widget';

export interface TextOptions extends WidgetOptions {
  text: string | Observer<string>;
  size?: number;
  color?: string;
  bold?: boolean;
}

export class Text extends Widget {
  private text: string = '';
  private color: string = 'rgb(0,0,0)';
  private size: number = 12;
  private bold: boolean = false;
  private fontName: string = 'system-ui';
  private observer?: Observer<string>;

  constructor(options: TextOptions) {
    super(options);

    this.color = options.color || 'rgb(0,0,0)';
    this.size = options.size || 12;
    this.bold = options.bold || false;

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
    context.renderContext.font = `${this.bold ? 'bold' : ''} ${this.size}px ${this.fontName}`;
    context.renderContext.textBaseline = 'top';
    context.renderContext.textAlign = 'start';
  }

  public layout(context: ScreenContext) {
    if (this.width === 0 || this.height === 0) {
      this.setFontStyle(context);

      const measure = context.renderContext.measureText(this.text);

      this.width = measure.width;
      this.height = measure.fontBoundingBoxDescent;
    }

    super.layout(context);
  }

  public render(context: ScreenContext) {
    this.setFontStyle(context);

    context.renderContext.fillStyle = this.color;
    context.renderContext.fillText(this.text, this.x, this.y);

    super.render(context);
  }
}
