# babel-plugin-react-native-classname-to-style

[![NPM version](http://img.shields.io/npm/v/babel-plugin-react-native-classname-to-style.svg)](https://www.npmjs.org/package/babel-plugin-react-native-classname-to-style)
[![Build Status](https://travis-ci.org/kristerkari/babel-plugin-react-native-classname-to-style.svg?branch=master)](https://travis-ci.org/kristerkari/babel-plugin-react-native-classname-to-style) [![Build status](https://ci.appveyor.com/api/projects/status/t36rxodjhk72hl9i/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/babel-plugin-react-native-classname-to-style/branch/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Transform JSX `className` property to `style` property in react-native.

## Single class

Example:

```jsx
<Text className={styles.myClass} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={styles.myClass} />
```

---

...or with `className` and `style`:

```jsx
<Text className={styles.myClass} style={{ color: "blue" }} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.myClass, { color: "blue" }]} />
```

## Multiple classes

#### Using `[styles.class1, styles.class2].join(" ")` syntax

Example:

```jsx
<Text className={[styles.class1, styles.class2].join(" ")} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.class1, styles.class2]} />
```

---

...or with `className` and `style`:

```jsx
<Text
  className={[styles.class1, styles.class2].join(" ")}
  style={{ color: "blue" }}
/>
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.class1, styles.class2, { color: "blue" }]} />
```

#### Using template literal syntax

Example:

```jsx
<Text className={`${styles.class1} ${styles.class2}`} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.class1, styles.class2]} />
```

---

...or with `className` and `style`:

```jsx
<Text
  className={`${styles.class1} ${styles.class2}`}
  style={{ color: "blue" }}
/>
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={[styles.class1, styles.class2, { color: "blue" }]} />
```

## Using ternary operator

Example:

```jsx
<Text className={isTrue ? styles.class1 : styles.class2} />
```

↓ ↓ ↓ ↓ ↓ ↓

```jsx
<Text style={isTrue ? styles.class1 : styles.class2} />
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
