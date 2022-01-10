# typescript-complete

Typescript: The Complete Developer's Guide by Stephen Grider

## Folder structure

- 01-getting-started
  - fetchjson
- 02-type-system
  - features
- 03-type-annotations
  - features
    - annotations
- 04-function-object
  - features
    - annotations
- 05-array
  - features
- 06-tuple
  - features
- 07-interface
  - features
- 08-class
  - features
- 09-design-patterns
  - maps: `parcel index.html`
- 10-more-design-patterns
  - sort: `npm start`
    - Inheritance Pattern - abstract class
- 11-reusable-code
  - stats: `npm start`
    - Very strong Composition Pattern!!
    - Also it has inheritance pattern separately
  - stats-static
    - using static method
- 12-advanced-generics
  - features
- 13-web-framework
  - web - run server: `json-server -w db.json` or `npm run start:db` - run client: `parcel index.html` or `npm run start:parcel`
    > I might need to go through one by one once more. It's quite complicated and amazing refactoring and concepts
  - 155-before-refactoring: Before refactoring with composition
- 14-express
  - server
- 16-advanced-express
  - server
    - it'd be quite intense
    - using decorators

# Details

[README Part 1](./README-part-1.md)

<details open> 
  <summary>Click to Contract/Expend</summary>

## Section 14. Express + Typescript Integration

### 212. Typescript with JS Libraries

- [Ts.ED](https://tsed.io/)
- Ts.ED is a Node.js Framework on top of Express/Koa.js. Written in Typescript

TS with JS Libs

1. Use the lib normally, adding in basic type annotations where possible
2. Use a TS adapter library that has helpers for using your lib with TS
3. Twist your lib to work with TS classes

### 214. Project Setup

```sh
mkdir server
cd server
npm init -y
tsc --init
npm install --save-dev concurrently nodemon
```

```json
// tsconfig.json
{
  "rootDir": "./src" /* Specify the root folder within your source files. */,
  "outDir": "./build" /* Specify an output folder for all emitted files. */
}
```

#### Install Chalk - Personal interest

1. \* using chalk@^4

```sh
npm install --save chalk@^4
# "chalk": "^4.1.2"
```

2. using chalk@5.0.0

```sh
npm install --save chalk
# "chalk": "^5.0.0"
```

> IMPORTANT: Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.\
> Or set up below

```json
// package.json
{
  "type": "module"
}
```

```json
// tsconfig.json
{
  "module": "ES6",
  "moduleResolution": "Node"
}
```

[tsconfig module](https://www.typescriptlang.org/tsconfig#module)
[tsconfig moduleResolution](https://www.typescriptlang.org/tsconfig#moduleResolution)

### 215. Basic Routes with Express

```sh
npm install --save express cookie-session
npm install --save-dev @types/express @types/cookie-session
```

- [vscode lit-html extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)
- autocomplete and syntax highlighting in literal strings
  ```js
  html` <div></div> `;
  ```

### 216. Using an Express Router

> if the file name is started with a capital letter, that means it exports a class (probably an object?)

```js
export { router };
```

### 217. Parsing Form Bodies

#### differences between urlencoded and json

- different content type
- `app.use(express.urlencoded({ extended: true }));`
  - submitting a form with post method ( default content-type = application/ x-www-form-urlencoded )
  - [express.urlencoded() documentation](https://expressjs.com/en/api.html#express.urlencoded)
- `app.use(express.json());`
  - for instance, API server
  - parses JSON and only looks at requests where the Content-Type header matches the type option
  - [express.json() documentation](https://expressjs.com/en/api.html#express.json)

### 218. Why Doesn't Express Play Nicely with TS?

```js
// index.ts
// app.use(express.urlencoded({ extended: true }));

// loginRoutes.ts
router.post('/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;
  // TypeError: Cannot destructure property 'email' of 'req.body' as it is undefined.
  res.send(email + password);
});
```

If we don't use urlencoded(), there won't be 'body' in request,\
However, TypeScript doesn't know it and warn about this.

### 219. Issues with Type Definition Files

```html
<input name="em" /> <input name="pa" type="password" />
```

```js
router.post('/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;
  res.send(email.toUpperCase());
  // TypeError: Cannot read properties of undefined (reading 'toUpperCase')
});
```

#### To solve this kind of issue

```ts
// node_modules/@types/express-serve-static-core/index.d.ts
// body: ReqBody;
body: { [key: string]: string | undefined };

// loginRoutes.ts
router.post('/login', (req: Request, res: Response): void => {
  const { email, password } = req.body;
  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide an email property');
  }
});
```

> This way can solve the issue, but we never manually modify type definition file.\
> When reinstall npm package, all changes will be gone\
> The solution is in the next lecture

### 220. Dealing with Poor Type Defs

Use interface

```ts
// loginRoutes.ts
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// router.post('/login', (req: Request, res: Response): void => {});
router.post('/login', (req: RequestWithBody, res: Response): void => {});
```

### 225. A Closer Integration

- Changing express to a class
- Massaging TS and Express to work better together will take a lot of time + effort
- Must get one or two outcomes

  1. Get better type safety (help TS do a better job of catching errors)
  2. Significantly enhance the developer experience

- Easy: Stick a bunch of express code into classes
- Hard: Stick a bunch of express code into classes + **Use some advanced features of TS**

## Section 15. Decorators

### 228. Decorators in Typescript

```sh
tsc --init
```

```json
// tsconfig.json - to use decorator
{
  "experimentalDecorators": true /* Enable experimental support for TC39 stage 2 draft decorators. */,
  "emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */
}
```

### 229. Details on Decorators

```sh
ts-node decorators.ts
# Target: {}
# Key: pilot
```

Target looks emptty on the terminal, but it has method when I print it out, `console.log('Target:', target.formattedColor);`

```js
// to simplify the compiled code
var __decorate = function (decorators, target, key, desc) {
  var desc = Object.getOwnPropertyDescriptor(target, key);

  for (var decorator of decorators) {
    decorator(target, key, desc);
  }
};
// ⏸⏸⏸ simply this is it
testDecorator(Boat.prototype, 'pilot');
```

### 230. Property Descriptors

[Object.getOwnPropertyDescriptor() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

- Property Descriptor for Methods
  - writable
  - enumerable
  - value
  - configurable

```js
// Example
const car = { make: 'hyundai', year: 2000 };
Object.getOwnPropertyDescriptor(car, 'make');
// {
//   configurable: true,
//   enumerable: true,
//   value: 'hyundai',
//   writable: true,
// }
Object.defineProperty(car, 'make', { writable: false });
// now I cannot change the value of 'make' property
```

### 234. More on Decorators

- classDecorator
- parameterDecorator
- But these are for quite advanced use cases

## Section 16. Advanced Express and TS Integration

### 235. A Quick Disclaimer

> Warning: pretty tough content starts here

### 236. Project Overview

- [npm ts-express-decorators](https://www.npmjs.com/package/ts-express-decorators)
- Ts.ED is a framework on top of Express to write your application with TypeScript (or in ES6). It provides a lot of decorators to write your code.

Goal: Make our app to work similar to Ts.ED

> We can make @decorators to have functionalities as well as to handle middlewares

### 238. Solution Overview

The same way as Ts.ED handles.

1. Node executes our code
2. Class definition read in - decorators are executed
3. Decorators associate route configuration info with the method by using _metadata_
4. All method decorators run
5. Class decorator of '@controller' runs last
6. Class decorator reads metadata from each method, adds complete route definitions to router

- Metadata
  - Proposed feature to be added to Javascript (and thus, TS)
  - Snippets of info that can be tied to a method, property, or class definition
  - Can be used for super custom stuff - (which we are doing now)
  - Typescript will (optionally) provide type information as metadata
  - Read and written using the reflect-metadata package
  - [npm reflect-metadata](https://www.npmjs.com/package/reflect-metadata)

### 239. Basics of Metadata

[reflect-metadata github](https://github.com/rbuckton/reflect-metadata)

```sh
# /features
npm init -y
npm install --save reflect-metadata
```

> metadata is a kind of hidden data not to be shown to public

```ts
import 'reflect-metadata';
const plane = { color: 'red' };
Reflect.defineMetadata('note', 'hi there', plane);
console.log(plane);
// { color: 'red' }
const note = Reflect.getMetadata('note', plane);
console.log(note);
// hi there
```

### 240. Practical Metadata

```js
// This won't work
function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}
⬇️⬇️⬇️
function printMetadata(target: typeof Plane) {
  Object.getOwnPropertyNames(Plane.prototype).forEach(key => {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  })
}
```

</details>

## TODO after this course

- Update Birthday Notifier with CsvFileReader.ts in 11-reusable-code
