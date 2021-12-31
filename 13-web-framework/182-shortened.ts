class Engine {
  start() {
    console.log('started');
  }
}

class Car {
  // engine: Engine;

  constructor(private engine: Engine) {
    // this.engine = new Engine();
  }

  start = this.engine.start;
  // Property 'engine' is used before its initialization.ts
}

// "use strict";
// class Engine {
//     start() {
//         console.log('started');
//     }
// }
// class Car {
//     constructor() {
//         this.start = this.engine.start;  // bound first
//         this.engine = new Engine();
//     }
// }
