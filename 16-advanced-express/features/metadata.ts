import 'reflect-metadata';

const plane = {
  color: 'red',
};

//****** 2. metadata to 'color' property  */
Reflect.defineMetadata('note', 'hi there', plane, 'color');

const noteOnColor = Reflect.getMetadata('note', plane, 'color');
console.log(noteOnColor);
// hi there

const noteOnPlane = Reflect.getMetadata('note', plane);
console.log(noteOnPlane);
// undefined

// //****** 1. metadata to 'plane' object  */
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

console.log(plane);
// { color: 'red' }

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note);
// hi there
console.log(height);
// 10
