import foods from './foods';
import {choice, remove} from './helpers';

let food = choice(foods);

console.log(`I'd like one ${food}, please`);
console.log(`Here enjoy ${food}`);
console.log(`Mmmmmm!!! Can I have some more please`);

let theRest = remove(food,foods);

console.log(`Sorry but you Cleaned me out. I have ${theRest.length} left`)