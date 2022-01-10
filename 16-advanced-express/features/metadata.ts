import 'reflect-metadata';

//****** 5. even better Practical factory example  */
@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

// function controller(target: Function) {
function controller(target: typeof Plane) {
  Object.getOwnPropertyNames(target.prototype).forEach((key) => {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    console.log(path);
    // router.get(path, middleware, target.prototype[key]);
  });
}

// //****** 4. Practical factory example  */
// class Plane {
//   color: string = 'red';

//   @markFunction('HI THERE')
//   fly(): void {
//     console.log('vrrrrrrr');
//   }
// }

// function markFunction(secretInfo: string) {
//   return function (target: Plane, key: string) {
//     Reflect.defineMetadata('secret', secretInfo, target, key);
//   };
// }

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);
// // HI THERE

// //****** 3. Simple example  */
// class Plane {
//   color: string = 'red';

//   @markFunction
//   fly(): void {
//     console.log('vrrrrrrr');
//   }
// }

// function markFunction(target: Plane, key: string) {
//   Reflect.defineMetadata('secret', 123, target, key);
// }

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);
// // 123

// //****** 2. metadata to 'color' property  */
// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const noteOnColor = Reflect.getMetadata('note', plane, 'color');
// console.log(noteOnColor);
// // hi there

// const noteOnPlane = Reflect.getMetadata('note', plane);
// console.log(noteOnPlane);
// // undefined

// //****** 1. metadata to 'plane' object  */
// const plane = {
//   color: 'red',
// };
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);
// // { color: 'red' }

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// // hi there
// console.log(height);
// // 10
