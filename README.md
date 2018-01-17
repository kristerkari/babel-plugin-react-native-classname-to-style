# babel-plugin-react-native-classname-to-style

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
