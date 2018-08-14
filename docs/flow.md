# Using Flow

## Where to look
* add //@flow at top of file

## When to look or stop looking
* yarn run [command]
* flow start (server)
* flow status (show errors)
* flow check (full Flow check)
* flow stop (server)

## Setting types Ecmascript files

### Example
```javascript
// param type   return type
function foo(x: number): string {}
```

### Available Primitives
* boolean
* string
* number
* null
* void (undefined)
* () => mixed (function without control over params or return)

### Literal Types
* true
* 42
* 'bar'

### Declaring
* one type `n: number`
* either type `value: string | number`
* maybe type `{ value?: boolean }`
* based on another `function foo<T>(value: T) : T {}`
* any primitive or function `value: mixed`
* unsafe anything goes `value: any`
* Arrays, unknown lenght, known types `Array<Type> or type[]`
* Tuple, known lenght and each type at each index `[number, string, boolean]`

### In Stateless Functional Components
```javascript
import * as React from 'react';

type Props = {
  foo: number,
  bar?: string
}

function myComponent(props: Props) {};

myComponent.defaultProps = {
  foo: 42
}
```

### Setting prop types
```javascript
import * as React from 'react';

type Props = {
  foo: number,    // foo is required
  bar?: string,   // bar is optional
};

class MyComponent extends React.Component<Props> {
  constructor(props: Props)
  // ...
```

### Setting state types
```javascript
import * as React from 'react';

type Props = {/* ... */};

type State = {
  count: number
};

class myComponent extends React.Component<Prop, State> {
  // ...
```

### Setting default props
```javascript
// ... set prop type like normal

class myComponent extends React.Component<Props> {
  static defaultProps = {
    foo: 42     // now foo has a default value
  };
};
```

### Importing and Exporting Types

* in types/actions.js `export type AddAction = type: 'ADD_ONE';`

* in actions/index.js `import type { AddAction } from ../types/actions.js;`

### Ignoring Errors

* to ignore errors in following line `// $FlowFixMe`
