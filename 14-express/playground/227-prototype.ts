class Boot {
  color: string = 'red';

  pilot(): void {
    console.log('swish');
  }

  float(): void {
    console.log('boat is floating');
  }
}

// Compiled code
// var Boot = /** @class */ (function () {
//   function Boot() {
//       this.color = 'red';
//   }
//   Boot.prototype.pilot = function () {
//       console.log('swish');
//   };
//   Boot.prototype.float = function () {
//       console.log('boat is floating');
//   };
//   return Boot;
// }());
