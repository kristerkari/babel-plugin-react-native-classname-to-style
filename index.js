module.exports = function(babel) {
  var css = null;
  var style = null;
  var t = babel.types;

  return {
    visitor: {
      JSXOpeningElement: {
        exit(path, state) {
          if (css === null) {
            return;
          }

          if (css.node.value.type === "StringLiteral") {
            return;
          }

          if (style === null) {
            style = css;
            style.node.name.name = "style";
          } else {
            if (style && css) {
              style.node.value = t.arrayExpression([
                css.node.value.expression,
                style.node.value.expression
              ]);
            }
            css.remove();
          }
          css = null;
          style = null;
        }
      },
      JSXAttribute: function JSXAttribute(path, state) {
        var name = path.node.name.name;
        if (name === "className") {
          css = path;
        } else if (name === "style") {
          style = path;
        }
      }
    }
  };
};
