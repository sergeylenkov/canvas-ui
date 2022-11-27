import { ScreenContext } from './screen';
import { Widget, WidgetOptions } from './widget';

export interface TextOptions extends WidgetOptions {
  text: string;
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

  constructor(options: TextOptions) {
    super(options);

    this.text = options.text;
    this.color = options.color || 'rgb(0,0,0)';
    this.size = options.size || 12;
    this.bold = options.bold || false;
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