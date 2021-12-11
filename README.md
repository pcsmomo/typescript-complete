# typescript-complete

Typescript: The Complete Developer's Guide by Stephen Grider

## Folder structure

- 01-getting-started
  - fetchjson
- 02-type-system
  - features

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
    1. When we declare a variable on one line then initialize it later
    2. When we want a variable to have a type that can't be inferred
    3. When a function returns the 'any' type and we need to clarify the value

</details>
