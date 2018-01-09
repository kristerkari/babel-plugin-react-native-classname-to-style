# babel-plugin-react-native-classname-to-style

Transform JSX `className` property to `style` property in react-native.

Example:

```jsx
<Text className={styles.myClass} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={styles.myClass} />
```

...or with `className` and `style`:

```jsx
<Text className={styles.myClass} style={{ color: "blue" }} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.myClass, { color: "blue" }]} />
```

## Usage

### Step 1: Install

```sh
yarn add --dev babel-plugin-react-native-classname-to-style
```

or

```sh
npm install --save-dev babel-plugin-react-native-classname-to-style
```

### Step 2: Configure `.babelrc`

```
{
  "presets": [
    "react-native"
  ],
  "plugins": [
    "react-native-classname-to-style"
  ]
}
```

## TODO

* Support multiple classes for `className`.
