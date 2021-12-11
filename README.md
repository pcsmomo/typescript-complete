# typescript-complete

Typescript: The Complete Developer's Guide by Stephen Grider

## Folder structure

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

</details>

## Section 9. Design Patterns with Typescript

### 51. App Overview

```sh
npm install -g parcel-bundler
```

> running html with auto-parceling ts files to js files
> ex parcel index.html

### 54. Generating Random Data

```sh
npm install --save faker
```

> faker: generate massive amounts of fake data in the browser and node.js

### 55. Type Definition Files

```sh
npm install --save-dev @types/faker
```

> This package contains type definitions for faker
> to remove the warning message

### 62. Google Maps Integration

```sh
npm install --save-dev @types/googlemaps
```

# 73. Configuring the TS Complier

## tsc --init

> Generate tsconfig.json

# 74. Concurrent Compliation and Execution

## npm init -y

> Generate package.json

## npm install nodemon concurrently

# 97. Concurrent Compliation and Execution

## npm init -y

## tsc --init

## npm install nodemon concurrently

# 99. Type Definition Files - Again!

## npm install @types/node

> Node standard library

# 138. Parcel Setup

## npm install -g parcel-bundler

# 148. Adding JSON Server

## npm install -g json-server

## create db.json file

> { "users": [] }

## json-server -w db.json

> run json-server
