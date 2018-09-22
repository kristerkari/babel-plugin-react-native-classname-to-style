# babel-plugin-react-native-classname-to-style

[![NPM version](http://img.shields.io/npm/v/babel-plugin-react-native-classname-to-style.svg)](https://www.npmjs.org/package/babel-plugin-react-native-classname-to-style)
[![Build Status](https://travis-ci.org/kristerkari/babel-plugin-react-native-classname-to-style.svg?branch=master)](https://travis-ci.org/kristerkari/babel-plugin-react-native-classname-to-style) [![Build status](https://ci.appveyor.com/api/projects/status/t36rxodjhk72hl9i/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/babel-plugin-react-native-classname-to-style/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/kristerkari/babel-plugin-react-native-classname-to-style/badge.svg?branch=master)](https://coveralls.io/github/kristerkari/babel-plugin-react-native-classname-to-style?branch=master)
[![Downloads per month](https://img.shields.io/npm/dm/babel-plugin-react-native-classname-to-style.svg)](http://npmcharts.com/compare/babel-plugin-react-native-classname-to-style?periodLength=30)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[![Greenkeeper badge](https://badges.greenkeeper.io/kristerkari/babel-plugin-react-native-classname-to-style.svg)](https://greenkeeper.io/)

Transform JSX `className` property to `style` property in react-native.

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

## Syntax

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
