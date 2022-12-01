import { Screen } from './core/screen';
import { Text } from './core/text';
import { Column } from './core/column';
import { Row } from './core/row';
import { Rect } from './core/rect';
import { CustomWidget } from './custom';
import { StateWidget } from './state';
import { State2Widget } from './state2';
import { TextStyle } from './core/text-style';

const defaultTextStyle = new TextStyle({ color: 'rgb(0,0,0)', size: 14,  bold: false });

const screen = new Screen({
  children: [
    new Text({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      text: `Hello world!`,
      style: new TextStyle({ color: 'rgb(150,10,10)', size: 24,  bold: true })
    }),
    new Column({
      x: 10,
      y: 50,
      children: [
        new Text({ text: `Line 1`, style: defaultTextStyle }),
        new Text({ text: `Line 2`, style: defaultTextStyle }),
        new Text({ text: `Line 3`, style: defaultTextStyle }),
      ]
    }),
    new Row({
      x: 10,
      y: 200,
      children: [
        new Text({ text: `Row 1`, style: defaultTextStyle }),
        new Text({ text: `Row 2`, style: defaultTextStyle }),
        new Text({ text: `Row 3`, style: defaultTextStyle }),
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
    }),
    new State2Widget({
      x: 10,
      y: 600
    })
  ]
});
