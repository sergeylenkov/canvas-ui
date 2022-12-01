export interface ITextStyle {
  color?: string;
  size?: number;
  bold?: boolean;
  fontName?: string;
}

export class TextStyle {
  public color: string;
  public size: number;
  public bold: boolean;
  public fontName: string;

  constructor(options: ITextStyle) {
    this.color = options.color || 'rgb(0,0,0)';
    this.size = options.size || 12;
    this.bold = options.bold || false;
    this.fontName = options.fontName || 'system-ui';
  }

  public build(): string {
    return `${this.bold ? 'bold' : ''} ${this.size}px ${this.fontName}`;
  }
}
