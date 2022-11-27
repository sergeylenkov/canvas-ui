import { Screen } from './core/screen';
import { Text } from './core/text';
import { Column } from './core/column';
import { Row } from './core/row';
import { Rect } from './core/rect';
import { CustomWidget } from './custom';
import { StateWidget } from './state';

const screen = new Screen({
  children: [
    new Text({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      text: `Hello world!`,
      color: 'rgb(150,10,10)',
      size: 24,
      bold: true
    }),
    new Column({
      x: 10,
      y: 50,
      children: [
        new Text({ text: `Line 1`, size: 14, x: 0, y: 0 }),
        new Text({ text: `Line 2`, size: 14, x: 0, y: 0 }),
        new Text({ text: `Line 3`, size: 14, x: 0, y: 0 }),
      ]
    }),
    new Row({
      x: 10,
      y: 200,
      children: [
        new Text({ text: `Row 1`, size: 14, x: 0, y: 0 }),
        new Text({ text: `Row 2`, size: 14, x: 0, y: 0 }),
        new Text({ text: `Row 3`, size: 14, x: 0, y: 0 }),
      ]
    }),
    new Rect(
      {
        x: 10,
        y: 300,
        width: 100,
        height: 50,
        backgroundColor: 'rgb(25,100,150)'
      }
    ),
    new CustomWidget({
      x: 10,
      y: 400,
      width: 100,
      height: 50,
    }),
    new StateWidget({
      x: 10,
      y: 500
    })
  ]
});
