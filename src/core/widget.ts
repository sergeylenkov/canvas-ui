import { ScreenContext } from './screen';

function *counter(): Generator<number> {
  let count = 0;

  while (true) {
    yield count++;
  }
}

export interface WidgetOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  children?: Widget[];
}

export class Widget {
  static counterID = counter();
  protected id: number;
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public children: Widget[];
  public shouldRender: boolean;

  constructor(options: WidgetOptions) {
    this.id = Widget.counterID.next().value;
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.width = options.width || 0;
    this.height = options.height || 0;
    this.children = options.children ? options.children : [];
    this.shouldRender = true;
  }

  public layout(context: ScreenContext) {
    console.log(`layout widget ${this.constructor.name} ${this.id}`);
    this.children.forEach(child => {
      child.layout(context);
    });
  }

  public render(context: ScreenContext) {
    console.log(`render widget ${this.constructor.name} ${this.id}, ${this.x, this.y}`);
    this.children.forEach(child => {
      child.shouldRender && child.render(context);
    });
  }
}
