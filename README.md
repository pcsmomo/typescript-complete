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
- 17-react-redux
  - rrts

# Details

<details open> 
  <summary>Click to Contract/Expend</summary>

## Section 1. Getting Started with Typescript

### 5. Environment Setup

```sh
npm install -g typescript ts-node

tsc --help
tsc test.ts
```

- tsc: compile test.ts to test.js
- ts-node: compiling + executing

#### Visual Studio Code Setting (_Optional_)

1. Add 'code' to path
2. Install Prettier Extension
3. Run pretiier on save
4. Use single quotes with prettier
5. Use two spaces for indentation
6. Use theme to 'Solarized Light

### 6. A First App

```sh
mkdir fetchjson
cd fetchjson
npm init -y
npm install --save axios
```

## Section 2. What is a Type System?

### 12. Types

Type: Easy way to refer to the different properties + functions that a value has

### 13. More on Types

- Primitive Types
  - number
  - string
  - boolean
  - undefined
  - null
  - void
  - symbol
- Object Types
  - functions
  - arrays
  - classes
  - objects

Why do we care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

### 14. Examples of Types

```sh
mkdir features
```

## Section 3. Type Annotations in Action

### 16. Type Annotations and Inference

- Type annotations: We(developers tell Typescript the type)
- Type inference: Typescript guesses the type

### 20. Understanding Inference

```js
let apples: number = 5;
let apples = 5;
```

if declaration and initialization are on the same line, \
Typescript will figure out the type of 'color' for us

- When to use what?
  - Type inference: Always!!!
  - Type annotations
    1. When a function returns the 'any' type and we need to clarify the value
    2. When we declare a variable on one line then initialize it later
    3. When we want a variable to have a type that can't be inferred

## Section 4. Annotations With Functions and Objects

### 26. Inference Around Functions

```js
const add = (a: number, b: number): number => {
  return a + b;
};
⏸⏸⏸
const add = (a: number, b: number) => {
  return a + b;
};
❗️❗️❗️
const add = (a: number, b: number) => {
  a + b;
};
// return void
```

- Arguments: No type inference for arguments!
- Return type: Type inference works out output, **but we won't use it!**

### 28. Void and Never

```js
const throwErrorNever = (message: string): never => {
  throw new Error(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
```

### 29. Destructuring with Annotations

```js
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
⬇️⬇️⬇️
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
```

### 30. Annotations Around Objects

```js
const { age, firstName }: { age: number, firstName: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number, lng: number } } = profile;
```

## Section 9. Design Patterns with Typescript

### 51. App Overview

```sh
npm install -g parcel-bundler
```

### 52. Bundling with Parcel

```sh
mkdir maps
cd maps
parcel index.html
# Server running at http://localhost:1234
# ✨  Built in 11.58s.
```

### 54. Generating Random Data

```sh
npm install --save faker
```

> [npm faker](https://www.npmjs.com/package/faker): generate massive amounts of fake data in the browser and node.js

```sh
# We will see this error message a lot during TypeScript course
Cannot find module 'faker' or its corresponding type declarations.ts(2307)
```

### 55. Type Definition Files

```sh
npm install --save-dev @types/faker
# This package contains type definitions for faker
```

[Definitely Typed](https://definitelytyped.org/)

### 56. Using Type Definition Files

> One of the good thing about TypeScript \
> We can link to the definition and could use it as a documentation

```js
class User {
  name: string;
  location: { lat: number, lng: number };
  constructor() {
    this.name = faker.name.firstName();
    // Before initialization, location is still undefined
    // so we cannot use this.location.lat yet
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
```

### 57. Export Statements inTypescript

Convention for TypeScript is to never use `export default` \
Always use just `export` and `import {}`

### 62. Google Maps Integration

```sh
npm install --save-dev @types/google.maps
```

[/// Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html#-reference-types-)

```js
/// <reference types="@types/google.maps" />
```

### 66. Adding Markers

In TypeScript, _class_ can be used two ways

1. to create an object
2. to refer a type definition

```js
import { User } from './User';
import { Company } from './Company';
```

### 71. Showing Popup Windows

[Google Map Marker Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows)

### 73. Optional Implements Clauses

```js
// random color
color: string = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
```

## Section 10. More on Design Patterns

### 76. Configuring the TS Compiler

```sh
tsc --init
```

```json
{
  "rootDir": "./src" /* Specify the root folder within your source files. */,
  "outDir": "./build" /* Specify an output folder for all emitted files. */
}
```

```sh
tsc
tsc -w
```

### 77. Concurrent Compilation and Execution

```sh
npm init -y
npm install --save nodemon concurrently
```

[npm concurrently](https://www.npmjs.com/package/concurrently)

### 81. Two Huge Issues

```js
'X'.charCodeAt(0);
'a'.charCodeAt(0);
```

### 83. Type Guards

- typeof: for Primitive type
  - string, number, boolean, etc.
  - `typeof this.collection === 'string'`
- instanceof: for Object type
  - Array, Object, Date, "Class Name", etc.
  - `this.collection instanceof Array`

### 84. Why is This Bad?

If we have different type of collection such as LinkedList,\
we need to create a new if statement \
What if we have 50 different types of collections? 50 if statements

### 85. Extracting Key Logic

Create Collection Class and have all logic

### 86. Separating Swapping and Comparison

```js
get length(): number {
  return this.data.length;
}
const collection = new NumbersCollection([1, 2, 3]);
collection.length;
```

### 95. Abstract Classes: (Broken still)

Our scenario is perfect to use Abstract Class at this point!!

### 98. Interfaces vs Abstract Classes

- Interfaces
  - Loose coupling
  - Use when we have very different objects that we want to work together
- Inheritance/Abstract Classes
  - Strongly couples classes together
  - Use when we are trying to build up a definition of an object

## Section 11. Reusable Code

### 100. Project Setup

```sh
# /stats
npm init -y
tsc --init
npm install --save nodemon concurrently
```

### 102. Type Definition Files - Again!

```sh
npm install --save-dev @types/node
```

### 117. Variable Types with Generics

<T> : using <T> instead of long name, <TypeOfData> convention of using Generics

### 119. Alternate Refactor

Two way to improve FileReader

1. inheritance: abstract class based
   - **"115. Understanding Refactor #1"** to **"118. Applying a Type to a Generic Class"**
2. composition: interface based
   - **"119. Alternate Refactor"** to **"123. Updating Reader References"**

### 125. More on Inheritance vs Composition

1. Inheritance
   ![inheritance](./resources/inheritance.jpeg)
   - there would be some duplication for two window classes
2. Composition
   ![composition](./resources/composition.jpeg)
   ![composition-match-reader](./resources/composition-match-reader.jpeg)
   - more independent and easier to use

### 126. A Huge Misconception Around Composition

'Design Patterns' by Erich Gamma, Richard Helm, Ralph Johnson, and John Vivissides

_Favor object composition over class inheritance_

**Delegation**

The meaning of Composition in the book, 'Design Patterns' and bloggers say are different.

1. Composition in the Design Patterns book
   - Delegation: each class does one whole process
2. Composition by bloggers
   - just composing some functions again and again - bad pattern

### 133. One Last Thing!

Using static method......

I think this approach has pros and cons.

index.ts got a lot simpler \
but Summary and MatchReader got strongly wired with the other compsition classes such as HtmlReport and CsvFileReader.\
Probably, Stephen just wanted to show there is another approach we can choose.

## Section 12. Advanced Generics

## Section 13. Let's Build a Web Framework

### 141. Parcel Setup

```sh
npm install -g parcel-bundler
parcel index.html
```

### 142. Framework Structure

1. Model Classes
2. View Classes

### 147. Listener Support

```js
// rather than just using () => void, type it
type Callback = () => void;
```

> `() => {}` means this function will return {} object type, not void

### 148. Storing Event Listeners

```js
export class User {
  // when we don't know what name of key will be used
  events: { [key: string]: Callback[] } = {};
}
```

### 151. Adding JSON Server

```sh
npm install --save axios
npm install -g json-server
```

create db.json file

```json
{ "users": [] }
```

```sh
# Run db server
json-server -w db.json
```

- [npm json-server](https://www.npmjs.com/package/json-server)
- Get a full fake REST API with zero coding in less than 30 seconds (seriously)
  - GET /users
  - GET /users/1
  - POST /users
  - PUT /users/1
  - PATCH /users/1
  - DELETE /users/1

### 157. Re-Integrating Eventing

1. Option #1
   - Accept dependencies as second constructor argument
2. Option #2
   - Only accpet dependenies into constructor defined a static class method to preconfigure user and assign properties afterwards
   - Similar to MatchReader from the last section
3. O, Option #3
   - Only accept properties into constructor
   - Hard code dependencies as class properties

### 160. Options for Adapting Sync

1. Option #1
   - Sync gets function arguments
2. Option #2
   - Sync expects arguments that satisfy interfaces 'Serialize' and 'Deserialize'
   - Serialize
     - Convert data from an object into some save-able format (json)
   - Deserialize
     - Put data on an object using some previously saved data (json)
3. O, Option #3
   - Sync is a generic class to customize the type of 'data' coming into save()
   - The most complicated but it'd be the best approach

### 164. Optional Properties

```sh
tsc --init
# "strict": true,
# These makes significant behavioural difference
```

```js
// before
const { id } = data; // id: number
// after "strict": true,
const { id } = data; // id: numbe | undefinedr
```

Remove tsconfig.json at the moment. I will have it back later and handle issues

### 167. Two Important Rules

1. In Typescript, strings can be types
   ```js
   type BestName = 'stephen';
   ```
2. In JS (and therefore TS), all object keys are strings
   ```js
   const color = {
     red: 'red',
     5: 'red',
   };
   ```

### 168. An Advanced Generic Constraint

```js
export class Attributes<T> {
  constructor(private data: T) {}
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
}
```

### 171. Reminder on Accessors

1. Direct passthrough of arguments
   - get(), on(), trigger()
2. Need coordination between different modules in User
   - set(), fetch(), save()

```js
// A quick reminder on accessors
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string{
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('firstname', 'lastname');
console.log(person.fullName);
```

### 172. Passthrough Methods

```js
// models/user.js
export class User {
  public events: Eventing = new Eventing();
  get on() {
    return this.events.on;
  }
}

// index.js
const user = new User({ name: 'new record', age: 0 });
user.on('change', () => {
  console.log('user was changed');
});
```

### 173. A Context Issue

```js
console.log(user.get('name'));

get<K extends keyof T>(key: K): T[K] {
  return this.data[key];
};
⬇️⬇️⬇️
get = <K extends keyof T>(key: K): T[K] => {
  return this.data[key];
};
```

> Stephen's opinion, in most cases, we might need arrow functions, not keyword function

### 182. Shortened Passthrough Methods

```js
get on() {
  return this.events.on;
}
⬇️⬇️⬇️
on = this.events.on;
```

```js
class Car {
  engine: Engine;
  constructor() {
    this.engine = new Engine();
  }
  start = this.engine.start;
  // Property 'engine' is used before its initialization.ts
}
⬇️⬇️⬇️
class Car {
  constructor(private engine: Engine) {}
  start = this.engine.start;
}
```

### 186. Generic User Collection

```js
// Collection.ts
constructor(public rootUrl: string) {}
⬇️⬇️⬇️
constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
//////////////////////////////////
const user = User.buildUser(value);
this.models.push(user);
⬇️⬇️⬇️
this.models.push(this.deserialize(value));
```

```js
// index.ts
const collection = new Collection('http://localhost:3000/users');
⬇️⬇️⬇️
const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.buildUser(json)
);
```

### 190. The UserForm's Render Method

[html template tag - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

### 199. Strict Null Checks

```sh
tsc --init
# "strict": true,
```

```js
const name2 = input.value;
// Object is possibly 'null'.ts(2531)
⬇️⬇️⬇️
// Use type guard
if (input) {
  const name = input.value;
  this.model.set({ name });
}
```

### 202. Extending with Generic Constraints

- Model - composition : Events, Attributes, ApiSync
- User - inherite Model
- Collection - composition : Model[]

- View - composition: Model
- UserEdit
  - inherit View
  - composition: UserShow, UserForm
- inherit ColllectionView
  - UserList
    - inherit ColllectionView
    - composition UserEdit

### 210. CollectionView Implementation

[html template content](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

### 211. App Wrapup

> This web framework we just built a bit simpler version of marionette.js - backbone.js\
> marionette.js: View, Region\
> backbone.js: Collection, Sync, get(), set()

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

### 242. The 'Get' Decorator

```sh
npm install --save reflect-metadata
```

```json
// tsconfig.json
{
  "experimentalDecorators": true /* Enable experimental support for TC39 stage 2 draft decorators. */,
  "emitDecoratorMetadata": true /* Emit design-type metadata for decorated declarations in source files. */
}
```

### 245. A Few Fixups

1. gather everything into /decorator/index.ts
2. use router with the singleton pattern

### 246. Defining a RouteBinder

A clever way to avoid duplicated code

```js
// Factory decorator - not to duplicate the same code again and again
function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const put = routeBinder('put');
export const post = routeBinder('post');
export const del = routeBinder('del');
export const patch = routeBinder('patch');
```

### 247. Closed Method Sets with Enums

```ts
export enum Methods {
  delete = 'delete',
}
export const del = routeBinder(Methods.delete);
// ironic
// 1. http method should be 'delete', not 'del'
// 2. but 'delete' is not allowed as a variable declaration name. ts(1389)
```

```ts
// Type declaration
const method: Methods = Reflect.getMetadata('method', target.prototype, key);
// Type assertion
const method = Reflect.getMetadata('method', target.prototype, key) as Methods;
// Both works without an error in this case,
// but check out this article below
```

[TypeScript: Type Declarations vs Type Assertions](https://imfaber.me/typescript-type-declarations-vs-type-assertions/)

> The author, Fabrizio Meinero said, "I hope it is now clear that you should always prefer type declarations because they offer additional safety checks, unless you have a good reason to think you know better than TypeScript."

### 249. The 'Use' Decorator

```js
export function use(middleware: RequestHandler) {}
```

### 253. Testing Automated Validation

Now that we have bodyValidator so we don't necessarily need 'RequestWithBody' but still we can have it if we want.

### 255. Using Property Descriptors for Type Checking

```js
interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}
```

## Section 17. React and Redux with Typescript

### 257. React and Redux Overview

- Pros
  - Far, far easier to avoid extremely common typos, like incorrect action types
  - Gives dev's a far better understanding of the type of data flowing around
  - Much easier to refactor just about anything
- Cons
  - Not the best type definition files (especially around redux) : hmm.. hopefully when this lecture was recorded?
  - Tons of generics flying around
  - Tons of imports, as just about everything (action creator, action, reducer, store, component) need to be aware of different types
  - Redux inherently functional in nature, tough integration with TS classes

### 258. App Overview

- [Redux with Typescript](https://redux.js.org/usage/usage-with-typescript)
- [React Redux with Typescript](https://react-redux.js.org/using-react-redux/usage-with-typescript)
- [cra-template-redux-typescript Github](https://github.com/reduxjs/cra-template-redux-typescript)

> We will follow some from the documentations but some are not.

```sh
npx create-react-app rrts --template typescript
# You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).
# We no longer support global installation of Create React App.
npx clear-npx-cache
npx create-react-app rrts --template typescript
```

> The lecture is going with class component, but I will go functional component\
> It might be challenging.. or not

### 261. Interfaces with Props

FC : FunctionComponent

```tsx
const App: React.FC<AppProps> = (props) => {};
```

### 263. Confusing Component State!

```tsx
// react/index.d.ts
// Base component for plain JS classes
interface Component<P = {}, S = {}, SS = any>
  extends ComponentLifecycle<P, S, SS> {}
```

```tsx
// index.tsx
// Class Component Example

// Way 1. Using constructor - need to provide State Type
interface AppProps {
  todos: Todo[];
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }
}

// Way 2. Not using constructor
interface AppProps {
  todos: Todo[];
}

class _App extends React.Component<AppProps, AppState> {
  state = { fetching: false };
}
```

> When using class component we need to decide which way we will go.

### 264. Functional Components

> for FunctionComponent, JSX.Element return type can be added

```tsx
const App: React.FC<AppProps> = (props): JSX.Element => {
  return <div>{props.color}</div>;
};
```

### 265. Redux Setup

```sh
npm install --save redux react-redux axios redux-thunk
```

### 266. Action Creators with Typescript

[jsonplaceholder - sample data API](https://jsonplaceholder.typicode.com/todos)

```ts
// Because we are using thunk, it should return a function
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_TODOS',
      payload: response.data,
    });
  };
};
```

### 278. Again, Type Definition Files

```tsx
interface AppProps {
  todos: Todo[];
  fetchTodos: typeof fetchTodos;
  deleteTodo: typeof deleteTodo;
}
⬇️⬇️⬇️
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
```

> That that time, there was no way to indicate redux-thunk for fetchTodos\
> Not sure now though 🤷

</details>

## TODO after this course

- Update Birthday Notifier with CsvFileReader.ts in 11-reusable-code
