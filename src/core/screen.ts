import { Widget } from './widget';

export interface ScreenOptions {
  width?: number;
  height?: number;
  children: Widget[];
}

export enum MouseEventType {
  None = 0,
  Click = 1
}

export interface ScreenContext {
  renderContext: CanvasRenderingContext2D;
  mouseEvent: {
    x: number;
    y: number;
  };
  mouseEventType: MouseEventType;
  mouseWheel: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
}

export class Screen {
  static context: ScreenContext;

  width: number = 0;
  height: number = 0;
  children: Widget[] = [];

  constructor(options: ScreenOptions) {
    const canvasElement = document.createElement('canvas');
    const context = canvasElement.getContext('2d', { alpha: true });

    if (!context) {
      throw new Error('Can\'t create canvas');
    }

    Screen.context = {
      renderContext: context,
      mouseEvent: { x: 0, y: 0 },
      mouseEventType: MouseEventType.None,
      mouseWheel: { x: 0, y: 0},
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.width = options.width || window.innerWidth;
    this.height = options.height || window.innerHeight;
    this.children = options.children;

    window.addEventListener('click', (event: MouseEvent) => {
      if (event.target) {
        Screen.context.mouseEvent.x = event.clientX;
        Screen.context.mouseEvent.y = event.clientY;
        Screen.context.mouseEventType = MouseEventType.Click;

        this.update();
      }
    });

    window.addEventListener('wheel', (event) => {
      Screen.context.mouseWheel = { x: event.deltaX, y: event.deltaY };
      this.render();
    });

    window.onload = () => {
      canvasElement.setAttribute('width', String(Screen.context.width));
      canvasElement.setAttribute('height', String(Screen.context.height));

      const root = document.getElementById('root');

      if (root) {
        root.appendChild(canvasElement);
      } else {
        throw new Error('Can\'t find root element');
      }

      this.render();
    }
  }

  render() {
    Screen.context.renderContext.clearRect(0, 0, this.width, this.height);

    this.children.forEach(child => {
      child.layout(Screen.context);
      child.render(Screen.context);
    });
  }

  update() {
    this.children.forEach(child => {
      child.update(Screen.context);
    });

    Screen.context.mouseEventType = MouseEventType.None;
  }
}
