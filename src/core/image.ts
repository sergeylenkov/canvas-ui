import { Screen, ScreenContext } from './screen';
import { Widget, WidgetOptions } from './widget';

export interface IPicture extends WidgetOptions {
  src: string;
}

export class ImageView extends Widget {
  private src: string;
  private image?: CanvasImageSource;

  constructor(options: IPicture) {
    super(options);

    this.src = options.src;
    this.load();
  }

  private load() {
    const img = new Image();

    img.onload = () => {
      this.image = img;

      if (this.width == 0) {
        this.width = img.naturalWidth;
      }

      if (this.height == 0) {
        this.height = img.naturalHeight;
      }

      this.render(Screen.context);
    }

    img.src = this.src;
  }

  public render(context: ScreenContext) {
    if (this.image) {
      context.renderContext.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    super.render(context);
  }
}
