import { Screen } from './core/screen';
import { Cards } from './cards';
import { ScrollView } from './core/scroll';

const screen = new Screen({
  children: [
    new ScrollView({
      x: 0,
      y: 0,
      width: window.innerWidth,
      height: window.innerHeight,
      children: [
        new Cards({
          width: window.innerWidth,
          height: window.innerHeight,
          cardSize: {
            width: 100,
            height: 200
          }
        })
      ]
    })
  ]
});

export { screen };
