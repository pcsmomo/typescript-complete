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

</details>

## TODO after this course

- Update Birthday Notifier with CsvFileReader.ts in 11-reusable-code
