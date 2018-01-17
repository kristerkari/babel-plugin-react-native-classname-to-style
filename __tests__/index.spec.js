import pluginTester from "babel-plugin-tester";
import plugin from "../index";

pluginTester({
  plugin,
  pluginName: "babel-plugin-react-native-classname-to-style",
  snapshot: true,
  babelOptions: {
    babelrc: true,
    filename: __filename
  },
  tests: [
    {
      title: "Should transform single classname to styles object",
      code: `const Foo = () => <div className={styles.foo}>Foo</div>`
    },
    {
      title:
        "Should transform single classname to styles object with multiple elements",
      code: `const Foo = () => <div><div className={styles.foo}>Foo</div><div className={styles.bar}>Bar</div></div>`
    },
    {
      title: "Should support merging className with style",
      code: `const Foo = () => <div className={styles.shouldMergeWithStyles} style={{ color: "#f00" }}>Foo</div>`
    },
    {
      title:
        "Should support merging className with style with multiple elements",
      code: `const Foo = () => <div><div className={styles.shouldMergeWithStyles} style={{ color: "#f00" }}>Foo</div><div className={styles.shouldMergeWithStyles} style={{ color: "#0f0" }}>Bar</div></div>`
    },
    {
      title: "Should support merging className with empty style object",
      code: `const Foo = () => <div className={styles.shouldMergeWithStyles} style={{}}>Foo</div>`
    },
    {
      title:
        "Should support merging className with empty style object and keep other props",
      code: `const Foo = () => <div className={styles.shouldMergeWithStyles} style={{}} key={1}>Foo</div>`
    },
    {
      title: "Should preserve className string",
      code: `const Foo = () => <div className="should-not-change">Foo</div>`
    },
    {
      title: "Should preserve className string and style object",
      code: `const Foo = () => <div className="should-not-change" style={{ color: "#f00" }}>Foo</div>`
    },
    {
      title: "Should not touch style object",
      code: `const Foo = () => <div style={{ color: "#f00" }}>Foo</div>`
    },
    {
      title: "Should not touch multiple style objects",
      code: `const Foo = () => <div style={[styles.shouldNotBeTransformed, { color: "#f00" }]}>Foo</div>`
    },
    {
      title: "Should not touch multiple style objects",
      code: `const Foo = () => <div style={[{ backgroundColor: "#000" }, { color: "#f00" }]}>Foo</div>`
    },
    {
      title: "Should not touch empty style definition",
      code: `const Foo = () => <div style={{}}>Foo</div>`
    },
    {
      title: "Should not touch className string and empty style definition",
      code: `const Foo = () => <div className="should-not-change" style={{}}>Foo</div>`
    },
    {
      title: "Should support single classname by joining an array",
      code: `const Foo = () => <div className={[styles.style1].join(' ')}>Foo</div>`
    },
    {
      title: "Should support multiple classnames by joining an array",
      code: `const Foo = () => <div className={[styles.style1, styles.style2].join(' ')}>Foo</div>`
    },
    {
      title:
        "Should support multiple classnames by joining an array with multiple elements",
      code: `const Foo = () => <div><div className={[styles.style1, styles.style2].join(' ')}>Foo</div><div className={[styles.style3, styles.style4].join(' ')}>Bar</div></div>`
    },
    {
      title: "Should support multiple classnames by joining an array",
      code: `const Foo = () => <div className={[styles.style1, styles.style2, styles.style3].join(' ')}>Foo</div>`
    },
    {
      title:
        "Should support single classname by joining an array and merge styles object",
      code: `const Foo = () => <div className={[styles.style1].join(' ')} style={{ color: "red" }}>Foo</div>`
    },
    {
      title:
        "Should support single classname by joining an array and merge empty styles object",
      code: `const Foo = () => <div className={[styles.style1].join(' ')} style={{}}>Foo</div>`
    },
    {
      title:
        "Should support multiple classnames by joining an array and merge styles object",
      code: `const Foo = () => <div className={[styles.style1, styles.style2, styles.style3].join(' ')} style={{ color: "red" }}>Foo</div>`
    },
    {
      title:
        "Should support multiple classnames by joining an array and merge empty styles object",
      code: `const Foo = () => <div className={[styles.style1, styles.style2, styles.style3].join(' ')} style={{}}>Foo</div>`
    }
    /*
    {
      title: "Should support destructuring multiple styles",
      code: `const Foo = () => <div className={{...style1, ...style2}}>Foo</div>`,
    },
    {
      title: "Should support template literals",
      code:
        "const Foo = () => <div className={`${styles.foo} ${styles.bar} ${styles.baz}`}>Foo</div>",
    },
    */
  ]
});
