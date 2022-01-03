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

</details>

## TODO after this course

- Update Birthday Notifier with CsvFileReader.ts in 11-reusable-code
